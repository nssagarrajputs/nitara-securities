import Hero from "@/components/page/about/Hero";
import OurStory from "@/components/page/about/OurStory";
import WhatMakesUsDifferent from "@/components/page/about/WhatMakesUsDifferent";
import OurValues from "@/components/page/about/OurValues";
import Leadership from "@/components/page/about/Leadership";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Nitara Securities | India's Proprietary Trading Desk",
    description:
        "Learn about Nitara Securities - a structured proprietary trading desk in Ghaziabad, India. Our mission, values, and commitment to building professional traders through expert mentorship.",
    keywords: [
        "about Nitara Securities",
        "prop trading company India",
        "trading desk Ghaziabad",
        "proprietary trading firm",
        "trading company India",
    ],
    openGraph: {
        title: "About Nitara Securities - Proprietary Trading Desk",
        description:
            "Discover our mission to empower traders with capital, technology, and mentorship in Indian financial markets.",
        url: "https://www.nitarasecurities.com/about",
        images: ["/og-about.png"],
    },
    alternates: {
        canonical: "https://www.nitarasecurities.com/about",
    },
};

export default function AboutPage() {
    return (
        <main>
            <Hero />
            <OurStory />
            <WhatMakesUsDifferent />
            <OurValues />
            <Leadership />
        </main>
    );
}
