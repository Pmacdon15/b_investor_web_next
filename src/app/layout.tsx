import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investor Web",
  description: "Simulate real-world investments in a completely safe and closed-in platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body>{children}</body>
    </html>
  );
}
