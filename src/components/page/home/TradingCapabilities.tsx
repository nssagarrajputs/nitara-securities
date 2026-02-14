"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Coins, LineChart } from "lucide-react";

const markets = [
    {
        icon: TrendingUp,
        title: "NSE (National Stock Exchange)",
        description:
            "Access to India's leading stock exchange with real-time data and lightning-fast execution for equity trading.",
        features: ["Cash Segment", "Derivatives", "Currency Futures"],
        color: "pacific",
    },
    {
        icon: BarChart3,
        title: "BSE (Bombay Stock Exchange)",
        description:
            "Trade on Asia's oldest stock exchange with comprehensive coverage across all major sectors and indices.",
        features: ["Equity Trading", "Index Options", "SME Platform"],
        color: "bamber",
    },
    {
        icon: LineChart,
        title: "F&O (Futures & Options)",
        description:
            "Execute sophisticated strategies with index and stock derivatives, hedging, and leveraged positions.",
        features: ["Index Futures", "Stock Options", "Hedging Strategies"],
        color: "pacific",
    },
    {
        icon: Coins,
        title: "Commodity Markets",
        description:
            "Trade precious metals, energy, and agricultural commodities with access to MCX and other exchanges.",
        features: ["Gold & Silver", "Energy", "Agricultural"],
        color: "bamber",
    },
];

export default function TradingCapabilities() {
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
                    <div className="border-pacific-200 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                        <BarChart3 size={16} />
                        <span>Trading Capabilities</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Multi-Market Access for{" "}
                        <span className="text-pacific-600">
                            Maximum Opportunities
                        </span>
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Trade across multiple asset classes and exchanges with
                        institutional-grade access, real-time data, and
                        professional execution tools.
                    </p>
                </motion.div>

                {/* Markets Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {markets.map((market, index) => {
                        const Icon = market.icon;
                        const isPacific = market.color === "pacific";

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
                                    delay: index * 0.15,
                                }}
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100/50 relative overflow-hidden rounded-2xl border-2 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 shadow-pacific-200 bg-gradient-to-br text-white"
                                            : "from-bamber-500 to-bamber-600 shadow-bamber-200 bg-gradient-to-br text-white"
                                    }`}
                                >
                                    <Icon size={32} />
                                </div>

                                {/* Content */}
                                <h3 className="text-twilight-900 mb-3 text-2xl font-bold">
                                    {market.title}
                                </h3>
                                <p className="text-twilight-600 mb-5 leading-relaxed">
                                    {market.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {market.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                                                isPacific
                                                    ? "bg-pacific-100 text-pacific-700"
                                                    : "bg-bamber-100 text-bamber-700"
                                            }`}
                                        >
                                            {feature}
                                        </span>
                                    ))}
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

                {/* Bottom Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="border-pacific-200 to-pacific-50/50 mt-12 rounded-2xl border-2 bg-gradient-to-br from-white p-8 text-center shadow-sm md:p-10"
                >
                    <h3 className="text-twilight-900 mb-3 text-2xl font-bold md:text-3xl">
                        Comprehensive Market Coverage
                    </h3>
                    <p className="text-twilight-700 mx-auto max-w-3xl text-lg leading-relaxed">
                        From intraday equity trades to complex multi-leg option
                        strategies, our platform and capital support give you
                        the flexibility to execute any trading style across all
                        major Indian financial markets.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
