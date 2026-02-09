import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Nitara Securities",
    description: "A Properitery Structured trading desk ferm",
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} scroll-smooth antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
