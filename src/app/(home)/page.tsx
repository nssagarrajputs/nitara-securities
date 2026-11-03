import CallToActionSection from "@/components/ui/CallToActionSection";
import HeroSection from "./_components/HeroSection";
import FAQ, { type FaqItem } from "@/components/template/FAQ";
import GetStarted from "./_components/GetStarted";
import Testimonial from "./_components/Testimonial";
import Statistics from "./_components/Statistics";
import MarketsAndInstruments from "./_components/MarketsAndInstruments";
import SoftwareAndTechnology from "./_components/SoftwareAndTechnology";
import Strategies from "./_components/Strategies";
import EdgeBanner from "./_components/EdgeBanner";
import HowItWorks from "./_components/HowItWorks";

const homeFaqs: FaqItem[] = [
    {
        id: 1,
        question: "What is Nitara Securities?",
        answer: "Nitara Securities is a platform where traders prove their skills through an evaluation and can then trade on a funded account, without risking their own capital for the funded stage.",
    },
    {
        id: 2,
        question: "How does the evaluation work?",
        answer: "You choose an evaluation plan, trade within the stated rules and profit target, and once you complete it successfully you advance to the funded level.",
    },
    {
        id: 3,
        question: "How do payouts work?",
        answer: "Once you are eligible at the funded level, you can request a payout from your dashboard. Requests are reviewed and processed as per our payout policy.",
    },
    {
        id: 4,
        question: "Can I retake an evaluation if I fail?",
        answer: "Yes. You can reset your evaluation or purchase a new one and try again. Pricing for resets is listed on the Pricing page.",
    },
    {
        id: 5,
        question: "Is trading on a funded account risk-free?",
        answer: "No. Trading always involves risk, and results are not guaranteed. Please read our disclaimers and trade only with risk capital you can afford to lose.",
    },
];

export default function Home() {
    return (
        <>
            <HeroSection />
            <HowItWorks />
            <MarketsAndInstruments />
            <SoftwareAndTechnology />
            <Statistics />
            <Strategies />
            <EdgeBanner />
            <Testimonial />
            <GetStarted />
            <FAQ items={homeFaqs} />
            <CallToActionSection />
        </>
    );
}
