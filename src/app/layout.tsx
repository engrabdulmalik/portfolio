import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Malik — Full Stack Engineer",
  description:
    "Abdul Malik is a full stack engineer building web and mobile products with React, React Native, Flutter, Django and .NET. Available for freelance and contract work.",
  keywords: [
    "Abdul Malik",
    "Full Stack Engineer",
    "React Developer",
    "Django Developer",
    ".NET Developer",
    "Lahore Pakistan",
  ],
  openGraph: {
    title: "Abdul Malik — Full Stack Engineer",
    description:
      "Building fast, reliable web & mobile products — from React front ends to Django and .NET back ends.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
