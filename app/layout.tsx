import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/components/AOSInitializer"; // We'll create this
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins", // for tailwind.config.js
});

export const metadata: Metadata = {
  title: "Addiona - Streamline Your Business Operations",
  description: "Addiona ERP: The future of enterprise resource planning. Creative, integrated, and powerful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-poppins antialiased",
        poppins.variable
      )}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}