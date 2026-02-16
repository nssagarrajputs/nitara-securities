import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Nitara Securities",
    description: "A Proprietary Structured trading desk firm",
    icons: [
        // Light mode icons
        {
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/light/favicon-16x16.png",
        },
        {
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/light/favicon-32x32.png",
        },
        {
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon/light/favicon.ico",
        },
        {
            media: "(prefers-color-scheme: light)",
            rel: "apple-touch-icon",
            sizes: "180x180",
            type: "image/png",
            url: "/favicon/light/apple-touch-icon.png",
        },
        {
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            url: "/favicon/light/android-chrome-192x192.png",
        },
        {
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            url: "/favicon/light/android-chrome-512x512.png",
        },

        // Dark mode icons
        {
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/dark/favicon-16x16.png",
        },
        {
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/dark/favicon-32x32.png",
        },
        {
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon/dark/favicon.ico",
        },
        {
            media: "(prefers-color-scheme: dark)",
            rel: "apple-touch-icon",
            sizes: "180x180",
            type: "image/png",
            url: "/favicon/dark/apple-touch-icon.png",
        },
        {
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            url: "/favicon/dark/android-chrome-192x192.png",
        },
        {
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            url: "/favicon/dark/android-chrome-512x512.png",
        },
    ],
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
