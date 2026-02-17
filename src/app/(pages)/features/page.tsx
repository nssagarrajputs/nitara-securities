import Hero from "@/components/page/features/Hero";
import CoreFeatures from "@/components/page/features/CoreFeatures";
import PlatformFeatures from "@/components/page/features/PlatformFeatures";
import TradingAdvantages from "@/components/page/features/TradingAdvantages";
import SupportSystem from "@/components/page/features/SupportSystem";
import Comparison from "@/components/page/features/Comparison";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features - Nitara Securities | Algo Trading Tools India",
    description:
        "Discover the features and benefits of trading with Nitara Securities. Advanced algo trading platforms, Lightning-fast execution, real-time data, risk management tools. Professional trading technology for NSE, BSE, F&O.",
    keywords: [
        "algo trading platform India",
        "trading terminal",
        "Quantphi platform",
        "Convex trading",
        "Greek calculator",
        "options trading tools",
        "trading technology",
        "NSE BSE trading platform",
    ],
    openGraph: {
        title: "Advanced Trading Platforms & Features | Nitara Securities",
        description:
            "Professional-grade algo trading platforms with real-time data, advanced analytics, and institutional tools.",
        url: "https://www.nitarasecurities.com/features",
        images: ["/og-features.png"],
    },
    alternates: {
        canonical: "https://www.nitarasecurities.com/features",
    },
};

export default function FeaturesPage() {
    return (
        <main>
            <Hero />
            <CoreFeatures />
            <PlatformFeatures />
            <TradingAdvantages />
            <SupportSystem />
            <Comparison />
        </main>
    );
}
