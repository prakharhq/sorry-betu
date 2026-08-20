import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "./MusicContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For Betu ❤️",
  description: "A special surprise from Riya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}