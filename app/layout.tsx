import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Layout/Header/header";
import Footer from "@/components/Layout/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "YM Motors | Premium Pre-Owned Vehicles",
  description:
    "Discover premium pre-owned vehicles with certified inspections, flexible financing, and trusted automotive services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}