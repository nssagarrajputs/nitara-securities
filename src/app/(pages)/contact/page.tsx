import Hero from "@/components/page/contact/Hero";
import ContactMethods from "@/components/page/contact/ContactMethods";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Nitara Securities | Proprietary Trading Desk Ghaziabad, India",
    description:
        "Get in touch with Nitara Securities. Phone: +91 75039 75037, Email: info@nitarasecurities.com. Office in Ghaziabad, Uttar Pradesh. Apply for trading positions.",
    keywords: [
        "contact Nitara Securities",
        "trading desk contact",
        "prop trading inquiry",
        "Ghaziabad trading firm",
    ],
    openGraph: {
        title: "Contact Us - Nitara Securities",
        description:
            "Reach out to discuss trading opportunities and career options.",
        url: "https://www.nitarasecurities.com/contact",
        images: ["/og-contact.png"],
    },
    alternates: {
        canonical: "https://www.nitarasecurities.com/contact",
    },
};

export default function ContactPage() {
    return (
        <main>
            <Hero />
            <ContactMethods />
        </main>
    );
}
