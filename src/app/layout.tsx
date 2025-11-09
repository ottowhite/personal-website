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
  const hostname = "you@ottos-website";
  const currentDate = new Date();
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateStr = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }).replace(/ /g, '-');

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} antialiased bg-black text-gray-100 font-mono`}
      >
        {/* Left sidebar - vim treesitter style */}
        <Sidebar />

        {/* Main content area */}
        <main className="min-h-screen ml-64 mb-7 p-6 bg-black">
          {children}
        </main>

        {/* Bottom status bar - TMUX style */}
        <div className="fixed bottom-0 left-0 right-0 h-6 bg-green-500 z-50 flex items-center px-4 text-black font-bold text-xs">
          <span>[0] 0:zsh*</span>
          <span className="ml-auto">"{hostname}" {timeStr} {dateStr}</span>
        </div>
      </body>
    </html>
  );
}
