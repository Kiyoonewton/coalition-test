import "./globals.css";
import Navbar from "@/components/Navbar";
import UnderConstruction from "@/components/UnderConstruction";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech.Care - Healthcare Management",
  description: "Healthcare management system with Adobe XD design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="!bg-gray-light">
        <div className="max-w-[1780px] w-[90%] mx-auto">
          <Navbar />
          <UnderConstruction />
          <main className="min-h-screen bg-gray-light">{children}</main>
        </div>
      </body>
    </html>
  );
}
