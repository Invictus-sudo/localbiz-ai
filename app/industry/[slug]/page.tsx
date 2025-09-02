import industries from "@/seed/industries.json";

export async function generateStaticParams() {
  return Object.keys(industries).map(slug => ({ slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = (industries as any)[slug];
  if (!data) return <main style={{padding: 24}}>Not found.</main>;
  return (
    <main style={{maxWidth: 760, margin: "40px auto", padding: 16}}>
      <h1 style={{fontSize: 26, fontWeight: 800}}>{data.name} – Reply & Caption Examples</h1>
      <h2 style={{marginTop: 16, fontWeight: 700}}>Δείγμα απάντησης σε review</h2>
      <p style={{marginTop: 8}}>{data.sampleReply}</p>
      <h2 style={{marginTop: 16, fontWeight: 700}}>Ιδέες captions</h2>
      <ul>{data.captionIdeas.map((c: string, i: number) => <li key={i} style={{lineHeight: 1.8}}>{c}</li>)}</ul>
    </main>
  );
}
