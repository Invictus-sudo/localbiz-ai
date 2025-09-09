export default function Dashboard() {
  return (
    <main style={{padding:"2rem"}}>
      <h1 style={{fontSize:"1.875rem", marginBottom:8}}>Welcome to your dashboard</h1>
      <p style={{opacity:0.8}}>This is a placeholder. After you connect your Stripe & Supabase, you can expand features here.</p>
      <ul style={{marginTop:16, lineHeight:1.8}}>
        <li>• Weekly draft captions queue</li>
        <li>• Google Reviews suggested replies</li>
        <li>• Industry templates</li>
      </ul>
    </main>
  );
}
