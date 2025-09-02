import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <main style={{maxWidth: 900, margin: "40px auto", padding: 16}}>
      <h1 style={{fontSize: 24, fontWeight: 800}}>Dashboard</h1>
      <p style={{marginTop: 8}}>Placeholder με 3 ενότητες:</p>
      <ul style={{marginTop: 8, lineHeight: 1.9}}>
        <li>Reviews (σύντομα)</li>
        <li>Social Queue (σύντομα)</li>
        <li>Templates (σύντομα)</li>
      </ul>

      <section style={{marginTop: 24}}>
        <Link href="/checkout" style={{padding: "12px 16px", borderRadius: 10, border: "1px solid #111"}}>Αναβάθμιση σε Pro (€29/μήνα)</Link>
      </section>
    </main>
  );
}
