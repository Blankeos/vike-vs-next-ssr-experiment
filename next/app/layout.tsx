export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <a href="/">Page with Data (/)</a>
          <a href="/no-data">Page with No Data (/no-data)</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
