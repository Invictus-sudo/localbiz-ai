"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: process.env.NEXT_PUBLIC_APP_URL } });
    if (!error) setSent(true);
    else alert(error.message);
  };
  return (
    <main style={{maxWidth: 420, margin: "80px auto", padding: 16}}>
      <h1 style={{fontSize: 24, fontWeight: 700}}>Σύνδεση με email</h1>
      {sent ? <p>Σου στείλαμε magic link. Έλεγξε το email σου.</p> : (
        <form onSubmit={onSubmit} style={{display: "grid", gap: 12, marginTop: 16}}>
          <input placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} style={{padding: 12, borderRadius: 8, border: "1px solid #ddd"}} />
          <button type="submit" style={{padding: 12, borderRadius: 8, border: "1px solid #111"}}>Στείλε magic link</button>
        </form>
      )}
    </main>
  );
}
