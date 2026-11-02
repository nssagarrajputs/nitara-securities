import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sans = localFont({
    src: [
        {
            path: "../fonts/ClarityCity-VariableFont_wght.ttf",
            weight: "100 900",
            style: "normal",
        },
        {
            path: "../fonts/ClarityCity-Italic-VariableFont_wght.ttf",
            weight: "100 900",
            style: "italic",
        },
    ],
    variable: "--font-sans-loaded",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Nitara Securities",
        template: "%s | Nitara Securities",
    },
    description:
        "Get a funded account and trade F&O and commodities with up to 30X buying power.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en-IN"
            data-scroll-behavior="smooth"
            className={`${sans.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
