import Link from "next/link";

export default function Home() {
  return (
    <main style={{maxWidth: 860, margin: "0 auto", padding: "48px 16px"}}>
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1 style={{fontSize: 28, fontWeight: 800}}>LocalBiz AI</h1>
        <nav style={{display: "flex", gap: 16}}>
          <Link href="/login">Σύνδεση</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <section style={{marginTop: 48}}>
        <h2 style={{fontSize: 24, fontWeight: 700}}>Απαντήσεις σε Reviews & έτοιμα Social Drafts, αυτόματα.</h2>
        <p style={{marginTop: 12}}>BYOK: ο πελάτης βάζει το δικό του AI κλειδί – εσύ μηδενικό κόστος.</p>
        <div style={{marginTop: 24, display: "flex", gap: 12}}>
          <Link href="/login" style={{padding: "12px 16px", borderRadius: 10, border: "1px solid #111"}}>Start Free Trial</Link>
          <Link href="/pricing" style={{padding: "12px 16px", borderRadius: 10}}>Τιμές</Link>
        </div>
      </section>
    </main>
  );
}
