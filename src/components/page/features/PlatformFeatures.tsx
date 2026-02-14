"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Zap,
    BarChart3,
    Cpu,
    Database,
    Shield,
    Activity,
    LineChart,
    Terminal,
} from "lucide-react";

const platformFeatures = [
    {
        icon: Zap,
        title: "Lightning-Fast Execution",
        description:
            "Ultra-low latency order routing with <10ms execution speed",
        stats: "<10ms",
    },
    {
        icon: BarChart3,
        title: "Advanced Charting",
        description: "100+ technical indicators with customizable layouts",
        stats: "100+",
    },
    {
        icon: Cpu,
        title: "Algorithmic Trading",
        description: "Built-in algo engine with backtesting capabilities",
        stats: "AI-Powered",
    },
    {
        icon: Database,
        title: "Real-Time Data",
        description:
            "Live tick-by-tick data from NSE, BSE, and commodity markets",
        stats: "Real-Time",
    },
    {
        icon: Shield,
        title: "Risk Controls",
        description:
            "Automated stop-loss and position limits for capital protection",
        stats: "Bank-Grade",
    },
    {
        icon: Activity,
        title: "Performance Tracking",
        description: "Comprehensive P&L analytics and trade journaling",
        stats: "24/7",
    },
    {
        icon: LineChart,
        title: "Multi-Asset Support",
        description: "Trade equity, F&O, and commodities from one platform",
        stats: "All Markets",
    },
    {
        icon: Terminal,
        title: "API Access",
        description: "Programmatic trading with robust API integration",
        stats: "Developer",
    },
];

export default function PlatformFeatures() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="platform"
            ref={ref}
            className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-linear-to-br px-4 py-16 lg:py-24"
        >
            {/* Background Pattern */}
            <div className="bg-size[4rem_4rem] absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)]" />

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
                        <span>Trading Platform</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Professional-Grade{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-linear-to-r bg-clip-text text-transparent">
                            Technology
                        </span>
                    </h2>
                    <p className="text-twilight-200 mx-auto max-w-3xl text-lg leading-relaxed">
                        Our proprietary algo trading terminal combines
                        institutional tools, advanced analytics, and high-speed
                        execution in one powerful platform.
                    </p>
                </motion.div>

                {/* Platform Features Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                                    delay: index * 0.05,
                                }}
                                className="group border-pacific-500/20 bg-twilight-800/50 hover:border-pacific-400/40 hover:bg-twilight-800/70 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300"
                            >
                                {/* Glow effect */}
                                <div className="from-pacific-500/0 via-pacific-500/5 to-pacific-500/0 absolute -inset-1 rounded-2xl bg-linear-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative">
                                    {/* Icon & Badge */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="from-pacific-500/20 to-pacific-600/20 text-pacific-400 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br transition-transform duration-300 group-hover:scale-110">
                                            <Icon size={24} />
                                        </div>
                                        <div className="bg-bamber-500/20 text-bamber-400 rounded-full px-3 py-1 text-xs font-bold">
                                            {feature.stats}
                                        </div>
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

                {/* Bottom Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="border-pacific-500/30 from-pacific-900/20 to-bamber-900/10 mx-auto max-w-4xl rounded-2xl border bg-linear-to-br p-8 backdrop-blur-sm md:p-10">
                        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                            Built for Professional Traders
                        </h3>
                        <p className="text-twilight-200 mb-4 leading-relaxed">
                            Our platform is designed to be powerful yet
                            intuitive. From simple equity trades to complex
                            multi-leg strategies, {"you'll"} have
                            institutional-grade tools at your fingertips.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
