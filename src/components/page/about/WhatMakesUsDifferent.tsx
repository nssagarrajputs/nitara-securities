"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Building2,
    Cpu,
    Users,
    Shield,
    GraduationCap,
    BarChart3,
} from "lucide-react";

const differentiators = [
    {
        icon: Building2,
        title: "Proprietary Trading Model",
        description:
            "We're not a brokerage or fund manager. We operate an in-house trading desk where you trade our capital, eliminating personal financial risk while maximizing opportunity.",
    },
    {
        icon: Cpu,
        title: "Proprietary Technology",
        description:
            "Our custom-built algo trading terminal provides institutional-grade tools, real-time data, and lightning-fast execution across all major Indian markets.",
    },
    {
        icon: Users,
        title: "Trader-First Culture",
        description:
            "We invest in people, not just positions. Every trader receives dedicated support, mentorship, and resources to grow their skills and career.",
    },
    {
        icon: Shield,
        title: "Risk-Managed Environment",
        description:
            "Structured risk controls, position limits, and systematic processes ensure both trader and firm protection while allowing for profitable trading.",
    },
    {
        icon: GraduationCap,
        title: "Comprehensive Training",
        description:
            "From NISM certification support to ongoing skill development, we provide the education and mentorship needed to succeed in professional trading.",
    },
    {
        icon: BarChart3,
        title: "Performance-Based Growth",
        description:
            "Our salary plus profit-sharing model aligns your success with ours. As you grow, your earnings and responsibilities grow proportionally.",
    },
];

export default function WhatMakesUsDifferent() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="from-twilight-50 to-pacific-50/30 relative overflow-hidden bg-gradient-to-br px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-200/30 absolute top-20 -left-20 h-80 w-80 rounded-full blur-3xl" />
            <div className="bg-bamber-200/30 absolute -right-20 bottom-20 h-80 w-80 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        What Makes Us{" "}
                        <span className="text-pacific-600">Different</span>
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Our unique approach combines institutional resources
                        with individual development, creating an environment
                        where traders can truly thrive.
                    </p>
                </motion.div>

                {/* Differentiators Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;

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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="from-pacific-500 to-pacific-600 shadow-pacific-200 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-twilight-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
