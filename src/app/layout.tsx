import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company Directory",
  description: "Explore and discover information about various companies in our comprehensive directory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg-color text-text-color`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
