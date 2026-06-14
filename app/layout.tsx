import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "ArkNetz | Independent Advisory for Data, Analytics & AI",
    template: "%s | ArkNetz",
  },
  description:
    "ArkNetz helps organizations make better decisions about data, analytics, AI, vendors, and transformation investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
