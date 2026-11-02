import SubPageHero from "@/components/ui/SubPageHero";
import WayToConnect from "./_components/WayToConnect";
import FAQ from "@/components/template/FAQ";

const contactFaqs = [
    {
        id: 1,
        question: "What are your office timings?",
        answer: "Our office is open Monday to Friday, 09:00 AM to 04:00 PM.",
    },
    {
        id: 2,
        question: "What is the best way to reach your team?",
        answer: "You can call us, message us on WhatsApp, or email info@nitarasecurities.com. Use whichever is most convenient for you.",
    },
    {
        id: 3,
        question: "Where is your office located?",
        answer: "Our office is at S7, Angel Mega Mall, Ghaziabad, UP 201010. You can open the location in Google Maps from the Visit us card above.",
    },
    {
        id: 4,
        question: "Can I visit your office in person?",
        answer: "Yes, you can visit us during office hours. We recommend contacting us beforehand so that the right person is available to meet you.",
    },
    {
        id: 5,
        question: "I need help choosing an account. Who should I talk to?",
        answer: "Call or message our team. We will help you understand the available packages, rules and trading platform so you can pick what suits you.",
    },
];

function page() {
    return (
        <>
            <SubPageHero eyebrow="Contact Us" heading="We're here to help" />

            <WayToConnect />

            <FAQ items={contactFaqs} />
        </>
    );
}

export default page;
