"use client";
import { useState } from "react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const go = async () => {
    setLoading(true);
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const { url } = await res.json();
    if (url) window.location.href = url;
    else alert('Error creating checkout');
  };
  return (
    <main style={{maxWidth: 520, margin: "80px auto", padding: 16}}>
      <h1>Αναβάθμιση σε Pro</h1>
      <button onClick={go} disabled={loading} style={{padding: 12, borderRadius: 8, border: "1px solid #111"}}>
        {loading ? "Φόρτωση..." : "Πληρωμή €29/μήνα"}
      </button>
    </main>
  );
}
