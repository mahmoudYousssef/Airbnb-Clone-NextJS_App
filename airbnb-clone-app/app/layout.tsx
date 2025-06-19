import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>

        <Header />
        {children}
        
        </body>
    </html>
  );
}
