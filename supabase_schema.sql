-- Supabase minimal schema for LocalBiz AI
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  plan text default 'free',
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "profiles are self" on public.profiles
  for select using (auth.uid() = id);

create policy "insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "update own profile" on public.profiles
  for update using (auth.uid() = id);

-- create trigger to insert profile row on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- social queue
create table if not exists public.social_queue (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  platform text,
  caption text,
  scheduled_at timestamptz,
  status text default 'draft',
  created_at timestamptz default now()
);

alter table public.social_queue enable row level security;
create policy "own rows" on public.social_queue for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- RPC example
create or replace function public.rpc_create_draft(p_user_id uuid, p_platform text, p_caption text, p_scheduled_at timestamptz)
returns void as $$
begin
  insert into public.social_queue (user_id, platform, caption, scheduled_at) 
  values (p_user_id, p_platform, p_caption, p_scheduled_at);
end; $$ language plpgsql security definer;
