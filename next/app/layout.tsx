import Link from "next/link";

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
          <Link href="/">Page with Data (/)</Link>
          <Link href="/no-data">Page with No Data (/no-data)</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
