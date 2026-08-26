import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MC Motors | Get Dream value-Owned Vehicles",
  description:
    "Discover premium pre-owned vehicles with certified inspections, flexible financing, and trusted automotive services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}