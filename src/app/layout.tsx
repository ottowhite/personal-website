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
        className={`${geistMono.variable} antialiased bg-black text-green-400 font-mono`}
      >
        {/* Top border - terminal window style */}
        <div className="fixed top-0 left-0 right-0 h-8 bg-black border-b border-green-500/30 z-50 flex items-center px-4">
          <span className="text-green-400 text-sm">otto@terminal:~$</span>
        </div>

        {/* Left sidebar - vim treesitter style */}
        <Sidebar />

        {/* Main content area */}
        <main className="min-h-screen ml-64 mt-8 mb-10 p-6 bg-black">
          {children}
        </main>

        {/* Bottom status bar - TMUX style */}
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-green-500 z-50 flex items-center px-4 text-black font-bold text-sm">
          <div className="flex items-center gap-6">
            <span className="bg-black text-green-400 px-3 py-1 rounded">[0] otto@terminal</span>
            <span>~</span>
            <span className="ml-auto">{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
          </div>
        </div>
      </body>
    </html>
  );
}
