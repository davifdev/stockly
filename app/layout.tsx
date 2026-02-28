import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stockly",
  description: "Gerenciador de estoque para pequenas empresas",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full">
          <Sidebar />
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
