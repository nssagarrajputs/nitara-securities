"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    TrendingUp,
    TrendingDown,
    Clock,
    Calendar,
    Target,
    Layers,
    Zap,
    BarChart3,
    Activity,
} from "lucide-react";

type StrategyCategory = "time-based" | "directional" | "multi-leg";

const categories = [
    {
        id: "time-based" as StrategyCategory,
        label: "Time-Based Strategies",
        icon: Clock,
    },
    {
        id: "directional" as StrategyCategory,
        label: "Directional Strategies",
        icon: TrendingUp,
    },
    {
        id: "multi-leg" as StrategyCategory,
        label: "Multi-Leg Options",
        icon: Layers,
    },
];

const strategies = {
    "time-based": [
        {
            name: "PULSE",
            icon: Zap,
            description: "Short-term moves across day/week using market timing",
            complexity: 2,
            risk: "Medium",
            color: "pacific",
        },
        {
            name: "CALENDAR",
            icon: Calendar,
            description:
                "Spread across expiry periods for time decay advantage",
            complexity: 3,
            risk: "Medium",
            color: "bamber",
        },
    ],
    directional: [
        {
            name: "BULL STRATEGY",
            icon: TrendingUp,
            description: "Aggressive calls with upward bias",
            complexity: 1,
            risk: "High",
            color: "pacific",
        },
        {
            name: "BEAR STRATEGY",
            icon: TrendingDown,
            description: "Puts or short calls for downturns",
            complexity: 1,
            risk: "High",
            color: "bamber",
        },
        {
            name: "MANUAL STRATEGY",
            icon: Target,
            description:
                "Discretionary trades placed based on market news or operator actions",
            complexity: 2,
            risk: "Variable",
            color: "pacific",
        },
    ],
    "multi-leg": [
        {
            name: "BUTTERFLY",
            icon: Activity,
            description: "Multi-leg strategy for neutral market outlook",
            complexity: 3,
            risk: "Low",
            color: "bamber",
            legs: "3-Leg",
        },
        {
            name: "1331 (4-LEG PULSE)",
            icon: Layers,
            description:
                "Complex pulse strategy built for directional plays with hedges",
            complexity: 4,
            risk: "Medium",
            color: "pacific",
            legs: "4-Leg",
        },
        {
            name: "3-LEG (143, 253, 121)",
            icon: BarChart3,
            description: "Tailored for volatility-based trades in fluctuation",
            complexity: 3,
            risk: "Medium",
            color: "bamber",
            legs: "3-Leg",
        },
        {
            name: "2-LEG (BULL, BEAR)",
            icon: TrendingUp,
            description: "Simple yet powerful entries on trend confirmation",
            complexity: 2,
            risk: "Medium",
            color: "pacific",
            legs: "2-Leg",
        },
    ],
};

export default function TradingStrategies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] =
        useState<StrategyCategory>("directional");

    const activeStrategies = strategies[activeCategory];

    const getRiskColor = (risk: string) => {
        switch (risk.toLowerCase()) {
            case "low":
                return "text-green-400 bg-green-500/20";
            case "medium":
                return "text-bamber-400 bg-bamber-500/20";
            case "high":
                return "text-red-400 bg-red-500/20";
            default:
                return "text-twilight-400 bg-twilight-500/20";
        }
    };

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-20 -left-20 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute -right-20 bottom-20 h-96 w-96 rounded-full blur-3xl" />

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
                    <div className="border-pacific-200 bg-pacific-50 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold">
                        <Target size={16} />
                        <span>Our Strategies</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Smart Strategies.{" "}
                        <span className="text-pacific-600">Real Results</span>
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        We don't just fund trades—we power them with proven,
                        risk-managed strategies developed by experts and
                        fine-tuned by data.
                    </p>
                    <p className="text-pacific-700 mt-4 text-base font-semibold">
                        Strategies Engineered for Every Market Move
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12 flex flex-wrap justify-center gap-4"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`group flex items-center gap-3 rounded-xl border-2 px-6 py-4 font-semibold transition-all duration-300 ${
                                    isActive
                                        ? "border-pacific-500 bg-pacific-500 shadow-pacific-500/30 text-white shadow-lg"
                                        : "border-twilight-200 text-twilight-700 hover:border-pacific-300 hover:bg-pacific-50 bg-white"
                                }`}
                            >
                                <Icon
                                    size={20}
                                    className={`transition-transform duration-300 ${
                                        isActive
                                            ? "scale-110"
                                            : "group-hover:scale-110"
                                    }`}
                                />
                                <span className="hidden sm:inline">
                                    {category.label}
                                </span>
                                <span className="sm:hidden">
                                    {category.label.split(" ")[0]}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Strategies Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {activeStrategies.map((strategy, index) => {
                        const Icon = strategy.icon;
                        const isPacific = strategy.color === "pacific";

                        return (
                            <motion.div
                                key={`${activeCategory}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative overflow-hidden rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 shadow-pacific-200 bg-gradient-to-br"
                                            : "from-bamber-500 to-bamber-600 shadow-bamber-200 bg-gradient-to-br"
                                    }`}
                                >
                                    <Icon size={32} />
                                </div>

                                {/* Strategy Name */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {strategy.name}
                                </h3>

                                {/* Leg Count (for multi-leg strategies) */}
                                {strategy.legs && (
                                    <div className="bg-twilight-100 text-twilight-700 mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold">
                                        {strategy.legs}
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-twilight-600 mb-6 leading-relaxed">
                                    {strategy.description}
                                </p>

                                {/* Metrics */}
                                <div className="border-twilight-100 flex items-center justify-between border-t pt-6">
                                    {/* Complexity */}
                                    <div>
                                        <div className="text-twilight-500 mb-2 text-xs font-semibold tracking-wide uppercase">
                                            Complexity
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-2 w-2 rounded-full ${
                                                        i < strategy.complexity
                                                            ? isPacific
                                                                ? "bg-pacific-500"
                                                                : "bg-bamber-500"
                                                            : "bg-twilight-200"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Risk */}
                                    <div className="text-right">
                                        <div className="text-twilight-500 mb-2 text-xs font-semibold tracking-wide uppercase">
                                            Risk
                                        </div>
                                        <div
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${getRiskColor(
                                                strategy.risk,
                                            )}`}
                                        >
                                            {strategy.risk}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 bg-gradient-to-r"
                                            : "from-bamber-500 to-bamber-600 bg-gradient-to-r"
                                    }`}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
