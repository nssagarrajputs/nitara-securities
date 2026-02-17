import Hero from "@/components/page/careers/Hero";
import DualPath from "@/components/page/careers/DualPath";
import TrainingProgram from "@/components/page/careers/TrainingProgram";
import ApplicationProcess from "@/components/page/careers/ApplicationProcess";
import CareersFAQ from "@/components/page/careers/CareersFAQ";
import ApplyNow from "@/components/page/careers/ApplyNow";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers - Join Nitara Securities | Trader Jobs in India | NISM Training",
    description:
        "Start your proprietary trading career with Nitara Securities. Hiring experienced traders & newcomers. Get NISM certification support, professional training, and trade with firm capital. Salary + profit sharing. Apply for trader positions now.",
    keywords: [
        "trader jobs India",
        "proprietary trader careers",
        "NISM certification jobs",
        "trading career opportunities",
        "prop trader hiring",
        "fresher trader jobs",
        "experienced trader jobs",
        "trading desk jobs Ghaziabad",
        "financial markets careers",
    ],
    openGraph: {
        title: "Trader Careers at Nitara Securities | Apply Now",
        description:
            "Build your trading career. Experienced traders & newcomers welcome. Free NISM training, expert mentorship, firm capital.",
        url: "https://www.nitarasecurities.com/careers",
        images: ["/og-careers.png"],
    },
    alternates: {
        canonical: "https://www.nitarasecurities.com/careers",
    },
};

export default function CareersPage() {
    return (
        <main>
            <Hero />
            <DualPath />
            <TrainingProgram />
            <ApplicationProcess />
            <CareersFAQ />
            <ApplyNow />
        </main>
    );
}
