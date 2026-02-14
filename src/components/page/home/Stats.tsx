"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        label: "Years in Business",
        value: 14,
        suffix: "+",
        prefix: "",
        color: "pacific",
    },
    {
        icon: Users,
        label: "Active Traders",
        value: 70,
        suffix: "+",
        prefix: "",
        color: "bamber",
    },
    {
        icon: Award,
        label: "Success Rate",
        value: 95,
        suffix: "%",
        prefix: "",
        color: "pacific",
    },
    {
        icon: TrendingUp,
        label: "Capital Deployed",
        value: 200,
        suffix: "Cr+",
        prefix: "₹",
        color: "bamber",
    },
];

function AnimatedCounter({
    value,
    duration = 2000,
}: {
    value: number;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const startValue = 0;
        const endValue = value;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(
                startValue + (endValue - startValue) * easeOutQuart,
            );

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function Stats() {
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
            <div className="bg-pacific-500/10 absolute top-1/2 -left-32 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
            <div className="bg-bamber-500/10 absolute top-1/2 -right-32 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />

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
                        <TrendingUp size={16} />
                        <span>Our Track Record</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Numbers That{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-gradient-to-r bg-clip-text text-transparent">
                            Speak for Themselves
                        </span>
                    </h2>
                    <p className="text-twilight-200 mx-auto max-w-2xl text-lg leading-relaxed">
                        Built on a foundation of performance, trust, and
                        continuous growth in the Indian financial markets.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const isPacific = stat.color === "pacific";

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
                                    delay: index * 0.15,
                                }}
                                className="group border-pacific-500/20 bg-twilight-800/50 hover:border-pacific-400/40 hover:bg-twilight-800/70 relative overflow-hidden rounded-2xl border p-8 text-center backdrop-blur-sm transition-all duration-300"
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className={`absolute -inset-1 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-100 ${
                                        isPacific
                                            ? "from-pacific-500/0 via-pacific-500/10 to-pacific-500/0 bg-gradient-to-r"
                                            : "from-bamber-500/0 via-bamber-500/10 to-bamber-500/0 bg-gradient-to-r"
                                    }`}
                                />

                                <div className="relative">
                                    {/* Icon */}
                                    <div
                                        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                                            isPacific
                                                ? "from-pacific-500/20 to-pacific-600/20 text-pacific-400 bg-gradient-to-br"
                                                : "from-bamber-500/20 to-bamber-600/20 text-bamber-400 bg-gradient-to-br"
                                        }`}
                                    >
                                        <Icon size={32} />
                                    </div>

                                    {/* Value */}
                                    <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                                        {stat.prefix}
                                        <AnimatedCounter value={stat.value} />
                                        {stat.suffix}
                                    </div>

                                    {/* Label */}
                                    <div className="text-twilight-300 text-sm font-medium tracking-wider uppercase">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Bottom Accent */}
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

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-twilight-300 text-lg">
                        Join a growing community of traders who trust Nitara
                        Securities with their careers.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
