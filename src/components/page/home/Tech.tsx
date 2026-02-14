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
    TrendingUp,
    Calculator,
} from "lucide-react";
import Image from "next/image";

const platformFeatures = [
    {
        icon: Zap,
        title: "Lightning-Fast Execution",
        description:
            "Ultra-low latency order routing with <10ms execution speed",
        stats: "<10ms",
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
];

const tradingPlatforms = [
    {
        name: "Quantphi",
        icon: Cpu,
        description:
            "Algo-based automation for precise trade execution with custom strategy support.",
        image: "/assets/platforms/quantphi.jpg", // Placeholder - add actual screenshot
        color: "pacific",
    },
    {
        name: "Convex",
        icon: TrendingUp,
        description:
            "Option analytics & volatility engine — perfect for managing risk and complex trades.",
        image: "/assets/platforms/convex.jpg", // Placeholder - add actual screenshot
        color: "bamber",
    },
    {
        name: "Greek",
        icon: Calculator,
        description:
            "Greeks calculator + multi-leg strategy handler — used for understanding delta, theta, vega etc for FnO.",
        image: "/assets/platforms/greek.jpg", // Placeholder - add actual screenshot
        color: "pacific",
    },
];

export default function TechnologyPlatform() {
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
                        Professional-Grade{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-gradient-to-r bg-clip-text text-transparent">
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
                <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                                <div className="from-pacific-500/0 via-pacific-500/5 to-pacific-500/0 absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative">
                                    {/* Icon & Badge */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="from-pacific-500/20 to-pacific-600/20 text-pacific-400 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
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

                {/* Our Trading Platforms - NEW SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-16"
                >
                    {/* Subsection Header */}
                    <div className="mb-12 text-center">
                        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                            Our Trading{" "}
                            <span className="from-bamber-400 to-pacific-400 bg-gradient-to-r bg-clip-text text-transparent">
                                Platforms
                            </span>
                        </h3>
                        <p className="text-twilight-200 mx-auto max-w-2xl text-lg">
                            Three specialized platforms for different trading
                            needs and strategies.
                        </p>
                    </div>

                    {/* Platforms Grid */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {tradingPlatforms.map((platform, index) => {
                            const Icon = platform.icon;
                            const isPacific = platform.color === "pacific";

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
                                        delay: 0.8 + index * 0.15,
                                    }}
                                    className="group border-pacific-500/30 bg-twilight-800/60 hover:border-pacific-400/50 hover:bg-twilight-800/80 hover:shadow-pacific-500/20 relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                                >
                                    {/* Screenshot/Image Container */}
                                    <div className="from-twilight-700 to-twilight-800 relative aspect-video overflow-hidden bg-gradient-to-br">
                                        {/* Placeholder for screenshot */}
                                        <div className="flex h-full w-full items-center justify-center">
                                            <div
                                                className={`flex h-24 w-24 items-center justify-center rounded-2xl ${
                                                    isPacific
                                                        ? "from-pacific-500/30 to-pacific-600/30 bg-gradient-to-br"
                                                        : "from-bamber-500/30 to-bamber-600/30 bg-gradient-to-br"
                                                }`}
                                            >
                                                <Icon
                                                    size={48}
                                                    className={
                                                        isPacific
                                                            ? "text-pacific-400"
                                                            : "text-bamber-400"
                                                    }
                                                />
                                            </div>
                                        </div>
                                        {/* Replace above div with actual image when available:
                    <Image
                      src={platform.image}
                      alt={`${platform.name} Platform Screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    */}

                                        {/* Overlay Gradient on Hover */}
                                        <div className="from-twilight-900 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Platform Name */}
                                        <h4
                                            className={`mb-3 text-2xl font-bold ${
                                                isPacific
                                                    ? "text-pacific-300"
                                                    : "text-bamber-300"
                                            }`}
                                        >
                                            {platform.name}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-twilight-200 leading-relaxed">
                                            {platform.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${
                                            isPacific
                                                ? "from-pacific-500 to-pacific-600 bg-gradient-to-r"
                                                : "from-bamber-500 to-bamber-600 bg-gradient-to-r"
                                        }`}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
