"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Do I need to invest my own capital?",
        answer: "No. As a proprietary trading firm, we provide 100% of the trading capital. You trade using the firm's money, not your personal savings. This eliminates personal financial risk and allows you to focus purely on executing profitable strategies.",
    },

    {
        question: "Is NISM certification mandatory?",
        answer: "Yes, NISM (National Institute of Securities Markets) certification is mandatory for anyone trading in Indian markets. If you don't already have it, we provide full support including study materials, guidance, and assistance in obtaining the certification as part of our training program.",
    },

    {
        question: "Can I work remotely or is it office-based?",
        answer: "Currently, our trading positions are office-based to ensure proper oversight, mentorship, collaboration, and access to our infrastructure. Being physically present also facilitates better learning, especially for newcomers, and helps build the collaborative culture that sets our desk apart.",
    },

    {
        question: "How quickly can I start trading after joining?",
        answer: "Experienced traders with NISM certification can begin trading within 1-2 weeks after onboarding and orientation. Newcomers will start trading with firm capital after completing the training program and obtaining NISM certification, typically within 2-3 months of joining.",
    },
];

export default function CareersFAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={ref}
            className="from-twilight-50 to-pacific-50/30 relative overflow-hidden bg-gradient-to-br px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-20 -right-20 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="border-pacific-200 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                        <HelpCircle size={16} />
                        <span>Career FAQs</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Common Questions
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        Everything you need to know about joining Nitara
                        Securities as a trader.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.03,
                                }}
                                className="border-twilight-100 hover:border-pacific-200 overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="hover:bg-pacific-50/50 flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-300"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-twilight-900 text-lg font-semibold">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`text-pacific-600 mt-1 shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                        size={24}
                                    />
                                </button>

                                {/* Answer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isOpen ? "auto" : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="border-twilight-100 bg-pacific-50/30 border-t px-6 py-5">
                                        <p className="text-twilight-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
