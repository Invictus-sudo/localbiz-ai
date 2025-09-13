// app/cancel/page.tsx
export default function CancelPage() {
  return (
    <main style={{ maxWidth: 800, margin: "48px auto", padding: 16 }}>
      <h1 style={{ color: "#dc2626", fontSize: 28 }}>Η πληρωμή ακυρώθηκε</h1>
      <p style={{ marginTop: 12 }}>
        Η διαδικασία πληρωμής ακυρώθηκε. Αν θες, δοκίμασε ξανά ή επικοινώνησε μαζί μας.
      </p>
      <a href="/dashboard">Πίσω στο dashboard</a>
    </main>
  );
}
