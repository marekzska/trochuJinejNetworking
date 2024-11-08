import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trochu Jinej Networking",
  description: "Trochu Jinej Networking",
  keywords: "networking, marketing, business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${montserrat.className} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
