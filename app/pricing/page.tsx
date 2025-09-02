export default function Pricing() {
  return (
    <main style={{maxWidth: 720, margin: "40px auto", padding: 16}}>
      <h1 style={{fontSize: 28, fontWeight: 800}}>Τιμές</h1>
      <div style={{display: "grid", gap: 16, marginTop: 16}}>
        <div style={{border: "1px solid #ddd", borderRadius: 12, padding: 16}}>
          <h3>Free Trial</h3>
          <p>7 ημέρες – βασικές δυνατότητες.</p>
        </div>
        <div style={{border: "1px solid #111", borderRadius: 12, padding: 16}}>
          <h3>Pro – 29€/μήνα</h3>
          <p>Έως 2 locations, 50 drafts/εβδ.</p>
        </div>
      </div>
    </main>
  );
}
