import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moments City Studios",
  description: "3D · 2D · VFX · MOTION — Cinematic animation for the modern world",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}
