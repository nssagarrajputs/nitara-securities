"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [

    {
        question: "Do I need prior trading experience?",
        answer: "Not necessarily. We welcome both experienced traders and newcomers. For newcomers, we provide comprehensive training, NISM certification support, and mentorship to help you develop the skills needed for professional trading.",
    },
    {
        question: "What is the salary structure?",
        answer: "Our traders work on a hybrid compensation model consisting of a fixed salary plus profit sharing. The exact structure depends on your experience level and performance. Additionally, we offer performance-based incentives to reward consistent results.",
    },
    {
        question: "What kind of training do you provide?",
        answer: "For newcomers, we offer structured training covering technical analysis, risk management, trading psychology, and platform usage. We also help you prepare for and obtain your NISM certification, which is mandatory for trading in Indian markets.",
    },
    {
        question: "What markets can I trade?",
        answer: "Our traders have access to NSE and BSE exchanges, covering equities, futures & options (F&O), and commodity markets. You'll use our proprietary algo trading terminal with real-time data feeds and advanced execution capabilities.",
    },
    {
        question: "Is there any capital requirement from my side?",
        answer: "No. As a proprietary trading firm, we provide 100% of the trading capital. You don't need to invest your own money. Your role is to execute trading strategies using our capital and technology infrastructure.",
    },
];

export default function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
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
                    <div className="border-pacific-200 bg-pacific-50 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold">
                        <HelpCircle size={16} />
                        <span>FAQs</span>
                    </div>
                    <h2 className="text-twilight mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        Find answers to common questions about joining Nitara
                        Securities, our training programs, and the proprietary
                        trading model.
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
                                    delay: index * 0.05,
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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="border-pacific-200 from-pacific-50 to-bamber-50/30 rounded-2xl border-2 bg-linear-to-br p-8">
                        <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                            Still Have Questions?
                        </h3>
                        <p className="text-twilight-700 mb-5">
                            Our team is here to help. Reach out and {"we'll"} be
                            happy to answer any additional questions you may
                            have.
                        </p>
                        <a
                            href="/contact"
                            className="bg-bamber-500 text-twilight-900 hover:bg-bamber-400 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
