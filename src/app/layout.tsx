import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy & Sell Second-Hand Products | Sustainable Shopping",
  description: "Give pre-loved products a second life. Buy quality items at better prices or sell things you no longer use. Smart shopping starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <div className="flex min-h-screen flex-col bg-white">
            <Header></Header>
            <main className="flex-1">
              {children}
              <Toaster />
            </main>
            <Footer />
          </div>
        
        </body>
    </html>
  );
}
