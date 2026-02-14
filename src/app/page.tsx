import CTA from "@/components/page/home/CTA";
import FAQ from "@/components/page/home/FAQ";
import HeroSection from "@/components/page/home/HeroSection";
import HowItWorks from "@/components/page/home/HowItsWork";
import KeyFeatures from "@/components/page/home/KeyFeatures";
import Stats from "@/components/page/home/Stats";
import TechnologyPlatform from "@/components/page/home/Tech";
import TradingCapabilities from "@/components/page/home/TradingCapabilities";
import WhatWeDo from "@/components/page/home/WhatWeDo";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhatWeDo />
            <TechnologyPlatform />
            <HowItWorks />
            <Stats />
            <TradingCapabilities />
            <KeyFeatures />
            <FAQ />
            <CTA />
        </main>
    );
}
