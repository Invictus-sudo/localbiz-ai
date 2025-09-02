export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body style={{ fontFamily: "Inter, system-ui, Arial, sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
