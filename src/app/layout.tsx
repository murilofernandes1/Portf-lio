import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murilo Fernandes Vaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interMono.variable}`}>{children}</body>
    </html>
  );
}
