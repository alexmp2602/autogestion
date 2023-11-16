import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de autogestión",
  description: "Sistema de autogestión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <Head>
        <link rel="icon" href="/logo-sistemas.ico" />
      </Head>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className={"overflow-auto flex-grow"}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
