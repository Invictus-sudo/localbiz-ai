// app/success/page.tsx
export default function SuccessPage() {
  return (
    <main style={{ maxWidth: 800, margin: "48px auto", padding: 16 }}>
      <h1 style={{ color: "#16a34a", fontSize: 28 }}>Η πληρωμή ολοκληρώθηκε — Ευχαριστούμε!</h1>
      <p style={{ marginTop: 12 }}>
        Το subscription σου είναι ενεργό. Μπορείς να πας στο <a href="/dashboard">Dashboard</a>.
      </p>
    </main>
  );
}
