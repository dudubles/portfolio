import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duduble's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
