import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Syhru | Portfolio",
  description: "My personal portfolio website, check this out!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white dark:bg-neutral-900`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />

            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
