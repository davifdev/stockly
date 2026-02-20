import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <h2 className="text-sm text-red-500">
          This is the main layout for the application
        </h2>
        {children}
      </body>
    </html>
  );
}
