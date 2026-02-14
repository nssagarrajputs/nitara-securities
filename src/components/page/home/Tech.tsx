"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Zap,
    BarChart3,
    Lock,
    Gauge,
    Database,
    LineChart,
    Activity,
    Cpu,
    Shield,
    Clock,
} from "lucide-react";

const platformFeatures = [
    {
        icon: Zap,
        title: "Lightning-Fast Execution",
        description:
            "Ultra-low latency order routing with direct market access for instant trade execution.",
    },
    {
        icon: BarChart3,
        title: "Advanced Charting",
        description:
            "Professional-grade technical analysis tools with 100+ indicators and customizable layouts.",
    },
    {
        icon: Cpu,
        title: "Algorithmic Trading",
        description:
            "Built-in algo engine for automated strategy execution with backtesting capabilities.",
    },
    {
        icon: Database,
        title: "Real-Time Data Feeds",
        description:
            "Live market data from NSE, BSE, F&O, and commodity exchanges with tick-by-tick precision.",
    },
    {
        icon: Shield,
        title: "Risk Management Tools",
        description:
            "Automated stop-loss, position sizing, and exposure limits to protect your capital.",
    },
    {
        icon: Activity,
        title: "Performance Analytics",
        description:
            "Comprehensive P&L tracking, trade journaling, and detailed performance metrics.",
    },
];

const technicalSpecs = [
    { icon: Gauge, label: "Order Speed", value: "<10ms" },
    { icon: Clock, label: "Uptime", value: "99.9%" },
    { icon: Lock, label: "Security", value: "Bank-Grade" },
    { icon: LineChart, label: "Markets", value: "NSE + BSE" },
];

export default function TechnologyPlatform() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-linear-to-br px-4 py-16 lg:py-24"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

            {/* Gradient Orbs */}
            <div className="bg-pacific-500/10 absolute top-0 -right-32 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-500/10 absolute bottom-0 -left-32 h-96 w-96 rounded-full blur-3xl" />

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
                    <div className="border-pacific-400/30 bg-pacific-500/10 text-pacific-300 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                        <Cpu size={16} />
                        <span>Technology Platform</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Trade with{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-linear-to-r bg-clip-text text-transparent">
                            Cutting-Edge Technology
                        </span>
                    </h2>
                    <p className="text-twilight-200 mx-auto max-w-3xl text-lg leading-relaxed">
                        Our proprietary algo trading terminal combines
                        institutional-grade tools, advanced analytics, and
                        high-speed execution in a unified platform designed for
                        serious traders.
                    </p>
                </motion.div>

                {/* Platform Features Grid */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {platformFeatures.map((feature, index) => {
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
                                className="group border-pacific-500/20 bg-twilight-800/50 hover:border-pacific-400/40 hover:bg-twilight-800/70 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300"
                            >
                                {/* Glow effect on hover */}
                                <div className="from-pacific-500/0 via-pacific-500/5 to-pacific-500/0 absolute -inset-1 rounded-2xl bg-linear-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="from-pacific-500/20 to-pacific-600/20 text-pacific-400 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br transition-transform duration-300 group-hover:scale-110">
                                        <Icon size={24} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-2 text-lg font-bold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-twilight-300 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Technical Specifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="border-pacific-500/30 bg-twilight-800/30 rounded-2xl border p-8 backdrop-blur-sm md:p-10"
                >
                    <div className="mb-8 text-center">
                        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                            Built for Performance
                        </h3>
                        <p className="text-twilight-300">
                            Enterprise-grade infrastructure powering your
                            trading operations
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {technicalSpecs.map((spec, index) => {
                            const Icon = spec.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.9 }
                                    }
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.7 + index * 0.1,
                                    }}
                                    className="border-pacific-500/20 bg-twilight-900/50 flex flex-col items-center rounded-xl border p-6 text-center"
                                >
                                    <div className="from-bamber-500/20 to-bamber-600/20 mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br">
                                        <Icon
                                            className="text-bamber-400"
                                            size={28}
                                        />
                                    </div>
                                    <div className="mb-1 text-3xl font-bold text-white">
                                        {spec.value}
                                    </div>
                                    <div className="text-twilight-400 text-sm">
                                        {spec.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
