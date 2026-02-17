import CTA from "@/components/page/home/CTA";
import FAQ from "@/components/page/home/FAQ";
import HeroSection from "@/components/page/home/HeroSection";
import HowItWorks from "@/components/page/home/HowItsWork";
import KeyFeatures from "@/components/page/home/KeyFeatures";
import Stats from "@/components/page/home/Stats";
import TechnologyPlatform from "@/components/page/home/Tech";
import Testimonials from "@/components/page/home/Testimonials";
import TradingCapabilities from "@/components/page/home/TradingCapabilities";
import TradingStrategies from "@/components/page/home/TradingStrategies";
import WhatWeDo from "@/components/page/home/WhatWeDo";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nitara Securities - Proprietary Trading Desk in India | Trade with Our Capital",
    description:
        "Join India's premier proprietary trading desk. Trade NSE, BSE, F&O & Commodities with 100% firm capital. No personal risk. Expert training, NISM support & profit sharing. Apply now.",
    keywords: [
        "proprietary trading India",
        "prop trading desk",
        "trading with firm capital",
        "NSE trading",
        "BSE trading",
        "F&O trading",
        "NISM certification",
        "trading career India",
        "Nitara Securities",
        "algo trading India",
        "professional trader jobs",
        "trading mentorship",
    ],
    authors: [{ name: "Nitara Securities" }],
    creator: "Nitara Securities",
    publisher: "Nitara Securities",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.nitarasecurities.com",
        siteName: "Nitara Securities",
        title: "Nitara Securities - Trade with Our Capital | Prop Trading Desk India",
        description:
            "India's premier proprietary trading desk. Trade with 100% firm capital, expert mentorship, and advanced platforms. No personal financial risk.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Nitara Securities - Proprietary Trading Desk",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nitara Securities - Proprietary Trading Desk in India",
        description:
            "Trade NSE, BSE, F&O with 100% firm capital. No personal risk. Expert training & NISM support included.",
        images: ["/twitter-image.png"],
    },
    alternates: {
        canonical: "https://www.nitarasecurities.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhatWeDo />
            <TechnologyPlatform />
            <TradingStrategies />
            <TradingCapabilities />
            <Stats />
            <KeyFeatures />
            <Testimonials />
            <HowItWorks />
            <FAQ />
            <CTA />
        </main>
    );
}
