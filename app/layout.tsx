export const metadata = {
  title: "AI Business Toolkit",
  description: "Draft replies & social posts for local businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin:0, fontFamily: "Inter, system-ui, Arial" }}>{children}</body>
    </html>
  );
}
