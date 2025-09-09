import data from "@/seed/industries.json";

export default function IndustryPage({ params }: { params: { slug: string }}) {
  const item = (data as any[]).find(i => i.slug === params.slug);
  if (!item) {
    return <main style={{padding:"2rem"}}><h1>Not found</h1></main>;
  }
  return (
    <main style={{padding:"2rem", maxWidth: 760}}>
      <h1 style={{fontSize:"1.875rem", marginBottom:8}}>{item.name} — AI Templates</h1>
      <p style={{opacity:0.8, marginBottom:16}}>{item.description}</p>
      <p>Sample page for programmatic SEO.</p>
    </main>
  );
}
