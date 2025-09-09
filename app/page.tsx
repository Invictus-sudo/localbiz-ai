"use client";

import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("No checkout URL returned.");
      }
    } catch (e:any) {
      setError(e?.message ?? "Checkout error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{display:"grid",placeItems:"center",minHeight:"100vh",padding:"2rem"}}>
      <div style={{maxWidth:780, width:"100%", textAlign:"center"}}>
        <img src="/logo.svg" width={48} height={48} alt="logo" style={{margin:"0 auto 16px"}}/>
        <h1 style={{fontSize: "2.25rem", lineHeight:1.2, marginBottom: 12}}>AI Business Toolkit</h1>
        <p style={{opacity:0.8, marginBottom: 24}}>
          Replies to Google Reviews and weekly social captions, in English & Greek.
        </p>

        <div style={{display:"flex", gap:16, justifyContent:"center", marginBottom:24}}>
          <a href="/dashboard" style={{padding:"12px 16px", border:"1px solid #e5e7eb", borderRadius:12}}>Go to Dashboard</a>
          <button onClick={handleCheckout} disabled={loading}
            style={{padding:"12px 16px", borderRadius:12, border:"none", background:"#111827", color:"#fff"}}>
            {loading ? "Redirecting..." : "Start – €29/month"}
          </button>
        </div>

        {error && <p style={{color:"crimson"}}>{error}</p>}

        <div style={{marginTop:32, borderTop:"1px solid #e5e7eb", paddingTop:24}}>
          <h3>Who is it for?</h3>
          <p style={{opacity:0.8}}>Restaurants, cafés, salons, gyms, and Airbnb hosts.</p>
        </div>
      </div>
    </main>
  );
}
