import Hero from "@/components/page/features/Hero";
import CoreFeatures from "@/components/page/features/CoreFeatures";
import PlatformFeatures from "@/components/page/features/PlatformFeatures";
import TradingAdvantages from "@/components/page/features/TradingAdvantages";
import SupportSystem from "@/components/page/features/SupportSystem";
import Comparison from "@/components/page/features/Comparison";

export const metadata = {
    title: "Features - Nitara Securities",
    description:
        "Discover the features and benefits of trading with Nitara Securities. Advanced platform, capital backing, expert mentorship, and comprehensive support.",
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
