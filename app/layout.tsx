import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Caleb Pickens",
  description: "Software Engineer and Student at UT Austin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <Nav />
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
