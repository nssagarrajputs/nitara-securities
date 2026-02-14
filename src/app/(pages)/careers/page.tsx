import Hero from "@/components/page/careers/Hero";
import DualPath from "@/components/page/careers/DualPath";
import TrainingProgram from "@/components/page/careers/TrainingProgram";
import ApplicationProcess from "@/components/page/careers/ApplicationProcess";
import CareersFAQ from "@/components/page/careers/CareersFAQ";
import ApplyNow from "@/components/page/careers/ApplyNow";

export const metadata = {
    title: "Careers - Join Nitara Securities",
    description:
        "Start your proprietary trading career with Nitara Securities. Opportunities for experienced traders and newcomers with training, capital, and mentorship.",
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
