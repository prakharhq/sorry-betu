import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For Betu ❤️",
  description: "A special surprise for my best friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Yeh raha Global Background Music jo har page par bina ruke chalega */}
        <audio id="global-bgm" src="/bg-music.mp3" loop preload="auto" />
        
        {children}
      </body>
    </html>
  );
}