"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Building2,
    TrendingUp,
    Users,
    Shield,
    Zap,
    Target,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Proprietary Capital",
        description:
            "Trade with our firm's capital, not your personal savings. Zero financial risk to you.",
    },
    {
        icon: TrendingUp,
        title: "Multi-Market Access",
        description:
            "Execute trades across NSE, BSE, F&O, and commodity markets with institutional access.",
    },
    {
        icon: Zap,
        title: "Advanced Technology",
        description:
            "Leverage our proprietary algo trading terminal built for speed and precision.",
    },
    {
        icon: Shield,
        title: "Risk Management",
        description:
            "Structured risk controls and position limits to protect both trader and firm.",
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description:
            "Learn from seasoned professionals and grow within a collaborative trading environment.",
    },
    {
        icon: Target,
        title: "Performance-Based Model",
        description:
            "Earn through salary plus profit sharing—your success is our success.",
    },
];

export default function WhatWeDo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
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
                        <Building2 size={16} />
                        <span>What We Do</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        A Structured Proprietary{" "}
                        <span className="text-pacific-600">Trading Desk</span>
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Nitara Securities is{" "}
                        <span className="text-twilight-800 font-semibold">
                            not a public fund manager or brokerage
                        </span>
                        . We operate an in-house proprietary trading desk where
                        professional traders execute strategies using the
                        {"firm's"}
                        capital across Indian financial markets.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 30 }
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="from-pacific-500 to-pacific-600 shadow-pacific-200 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>

                                {/* Content */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {feature.title}
                                </h3>
                                <p className="text-twilight-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Accent */}
                                <div className="from-pacific-500 to-bamber-500 absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Highlight Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="border-pacific-200 from-pacific-50 to-bamber-50/30 mt-16 rounded-2xl border-2 bg-linear-to-br p-8 md:p-10"
                >
                    <div className="mx-auto max-w-4xl text-center">
                        <h3 className="text-twilight-900 mb-4 text-2xl font-bold md:text-3xl">
                            Our Philosophy
                        </h3>
                        <p className="text-twilight-700 text-lg leading-relaxed">
                            We believe in{" "}
                            <span className="text-pacific-700 font-semibold">
                                disciplined execution, systematic risk
                                management
                            </span>
                            , and{" "}
                            <span className="text-pacific-700 font-semibold">
                                process-driven trading
                            </span>
                            . Whether {"you're"} an experienced trader looking for
                            capital backing or a newcomer eager to learn, we
                            provide the infrastructure, mentorship, and
                            resources to help you succeed in the markets.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-20 -right-20 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
        </section>
    );
}
