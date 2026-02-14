import Hero from "@/components/page/about/Hero";
import OurStory from "@/components/page/about/OurStory";
import WhatMakesUsDifferent from "@/components/page/about/WhatMakesUsDifferent";
import OurValues from "@/components/page/about/OurValues";
import Leadership from "@/components/page/about/Leadership";

export const metadata = {
    title: "About Us - Nitara Securities",
    description:
        "Learn about Nitara Securities, our mission, values, and commitment to building professional traders through structured proprietary trading.",
};

export default function AboutPage() {
    return (
        <main>
            <Hero />
            <OurStory />
            <WhatMakesUsDifferent />
            <OurValues />
            <Leadership/>
        </main>
    );
}
