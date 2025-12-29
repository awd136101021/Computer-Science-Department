import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Computer Science Department - University of Gujrat",
  description: "Official website of the Computer Science Department at the University of Gujrat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-[Poppins] text-gray-800 bg-gray-100 overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
