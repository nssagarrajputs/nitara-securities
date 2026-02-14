import Hero from "@/components/page/contact/Hero";
import ContactMethods from "@/components/page/contact/ContactMethods";

export const metadata = {
    title: "Contact Us - Nitara Securities",
    description:
        "Get in touch with Nitara Securities. Call, email, or visit us to discuss trading opportunities and career options.",
};

export default function ContactPage() {
    return (
        <main>
            <Hero />
            <ContactMethods />
        </main>
    );
}
