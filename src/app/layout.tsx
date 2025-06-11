import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otto White",
  description: "Personal website of Otto White",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900/95 z-50">
          <div className="h-full flex items-center px-4">
            <Sidebar />
            <h1 className="text-xl font-bold text-white ml-4">Otto White</h1>
          </div>
        </div>
        <main className="min-h-screen p-4 md:p-8 md:ml-64 relative z-[35] pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
