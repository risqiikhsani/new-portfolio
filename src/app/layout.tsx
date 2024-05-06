import type { Metadata } from "next";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from 'sonner'
import NumberVisitor from "@/components/number-visitor";



export const metadata: Metadata = {
  title: "Hypernova Portfolio",
  description: "Hypernova Portfolio",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-left" richColors/>
          <Navbar/>
          <div className="container py-28 md:px-52 bg-[url('/home_files/subtle-prism.svg')] dark:bg-[url('/home_files/background.png')]">
          {children}
          </div>
          <NumberVisitor/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
