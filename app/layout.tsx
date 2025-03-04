import type { Metadata } from "next";
import type { Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],  
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NewsHub",
  description: "A simple news aggregator",
  icons: {
    icon: "/favicon.ico",
  },
  appleWebApp: {
    title: "NewsHub - A simple news aggregator",
    capable: true,
    statusBarStyle: "default",
  }
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
