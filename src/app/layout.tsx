import type { Metadata } from "next";
import { Bai_Jamjuree, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--onest",
});
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--baijamjure",
});

export const metadata: Metadata = {
  title: {
    default: "Welcome to Our Store | Furnix App",
    template: "%s | Furnix App",
  },
  description:
    "Furnix is a furniture store. We have a wide variety of furniture for you to choose from.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${baiJamjuree.variable} ${onest.variable}`}>
        <Navbar />
        <main className="w-full min-h-screen flex flex-col items-center mt-[75px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
