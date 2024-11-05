import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Montserrat_Alternates } from "next/font/google"
import { Header } from "../components/Header";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trochu Jinej Networking",
  description: "Trochu Jinej Networking",
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
      </body>
    </html>
  );
}
