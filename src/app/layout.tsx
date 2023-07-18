import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AS-Finance",
  description: "Finance app for AS Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/64b6f708cc26a871b0293f69/1h5lb9uhs"
      />
      <body>{children}</body>
    </html>
  );
}
