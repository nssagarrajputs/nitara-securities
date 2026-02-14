"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
    {
        feature: "Capital Required",
        independent: "₹5-50 Lakhs+",
        nitara: "₹0 (100% Firm Capital)",
    },
    {
        feature: "Financial Risk",
        independent: "100% Personal",
        nitara: "Zero Personal Risk",
    },
    {
        feature: "Trading Platform",
        independent: "Paid Subscriptions",
        nitara: "Free Advanced Platform",
    },
    {
        feature: "Mentorship",
        independent: "Self-Learning",
        nitara: "Expert Guidance Included",
    },
    {
        feature: "Risk Management",
        independent: "Self-Managed",
        nitara: "Systematic Controls",
    },
    {
        feature: "Training & Education",
        independent: "Paid Courses",
        nitara: "Free Comprehensive Training",
    },
    {
        feature: "Support System",
        independent: "None",
        nitara: "24/7 Dedicated Support",
    },
    {
        feature: "Career Growth",
        independent: "Limited",
        nitara: "Structured Path",
    },
    {
        feature: "Income Structure",
        independent: "100% Profit, 100% Loss",
        nitara: "Salary + Profit Sharing",
    },
    {
        feature: "Community",
        independent: "Isolated",
        nitara: "Collaborative Environment",
    },
];

export default function Comparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-gradient-to-br px-4 py-16 lg:py-24"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Gradient Orbs */}
            <div className="bg-pacific-500/20 absolute top-0 -left-40 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-500/20 absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Why Choose{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-gradient-to-r bg-clip-text text-transparent">
                            Nitara Securities?
                        </span>
                    </h2>
                    <p className="text-twilight-200 mx-auto max-w-2xl text-lg leading-relaxed">
                        See how our proprietary trading model compares to
                        independent trading.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="border-pacific-500/30 bg-twilight-800/50 overflow-hidden rounded-2xl border backdrop-blur-sm"
                >
                    {/* Table Header */}
                    <div className="border-pacific-500/30 bg-twilight-900/50 grid grid-cols-3 gap-4 border-b p-6">
                        <div className="text-twilight-400 text-sm font-semibold tracking-wide uppercase">
                            Feature
                        </div>
                        <div className="text-twilight-400 text-center text-sm font-semibold tracking-wide uppercase">
                            Independent Trading
                        </div>
                        <div className="text-pacific-300 text-center text-sm font-semibold tracking-wide uppercase">
                            Nitara Securities
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-pacific-500/20 divide-y">
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -20 }
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.05,
                                }}
                                className="hover:bg-twilight-700/30 grid grid-cols-3 gap-4 p-6 transition-colors"
                            >
                                <div className="font-medium text-white">
                                    {row.feature}
                                </div>
                                <div className="text-twilight-300 flex items-center justify-center gap-2 text-center text-sm">
                                    <X
                                        className="shrink-0 text-red-400"
                                        size={16}
                                    />
                                    <span>{row.independent}</span>
                                </div>
                                <div className="text-pacific-300 flex items-center justify-center gap-2 text-center text-sm font-semibold">
                                    <Check
                                        className="shrink-0 text-green-400"
                                        size={16}
                                    />
                                    <span>{row.nitara}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="border-pacific-500/30 bg-twilight-800/30 mx-auto max-w-3xl rounded-2xl border p-8 backdrop-blur-sm md:p-10">
                        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                            Experience the Difference
                        </h3>
                        <p className="text-twilight-200 mb-6 text-lg leading-relaxed">
                            Join Nitara Securities and trade with all the
                            advantages of firm capital, professional
                            infrastructure, and expert support.
                        </p>
                        <a
                            href="/careers"
                            className="bg-bamber-500 text-twilight-900 hover:bg-bamber-400 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                        >
                            Start Your Application
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
