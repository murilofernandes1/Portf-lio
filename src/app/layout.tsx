import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import NavBar from "@/components/left-navbar/navbar";
import Footer from "@/components/footer/footer";

const interMono = Inter({
  variable: "--font-inter",
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
    <html lang="pt-br">
      <body className={`${interMono.variable}`}>
        <div className="page">
          <Header />

          <div className="body">
            <NavBar />
            <div className="content">{children}</div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
