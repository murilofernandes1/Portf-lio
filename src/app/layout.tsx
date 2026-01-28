import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Silk from "../components/Silk";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/left-navbar/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<mfv/>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className={`${inter.variable} antialiased relative`}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <Silk
            speed={0.4}
            scale={0.2}
            color="#4c4a4c"
            noiseIntensity={1.8}
            rotation={0}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col animate-in fade-in duration-1000">
          <Header />
          <div className="flex flex-1">
            <NavBar />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
