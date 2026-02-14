"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Users,
    UserCheck,
    Award,
    Headphones,
    Shield,
    TrendingUp,
    Zap,
    GraduationCap,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Community Engagement",
        description:
            "Join a collaborative trading environment where knowledge sharing and peer learning drive collective success.",
        // details: [
        //     "Daily strategy discussions",
        //     "Peer learning sessions",
        //     "Collaborative problem-solving",
        //     "Shared market insights",
        // ],
        color: "pacific",
    },
    {
        icon: UserCheck,
        title: "Dedicated Account Manager",
        description:
            "Every trader receives personalized support from a dedicated account manager throughout their journey.",
        // details: [
        //     "Personal point of contact",
        //     "Weekly performance reviews",
        //     "Goal setting & tracking",
        //     "Career path guidance",
        // ],
        color: "bamber",
    },
    {
        icon: Award,
        title: "Expert-Led Mentorship",
        description:
            "Learn from seasoned professionals with years of market experience and proven track records.",
        // details: [
        //     "One-on-one mentoring",
        //     "Strategy development support",
        //     "Real-time trading feedback",
        //     "Psychology coaching",
        // ],
        color: "pacific",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description:
            "Round-the-clock technical and trading support ensures you're never stuck when you need help.",
        // details: [
        //     "Technical platform support",
        //     "Trading assistance",
        //     "Emergency response",
        //     "Multi-channel availability",
        // ],
        color: "bamber",
    },
    {
        icon: Shield,
        title: "Risk Management",
        description:
            "Comprehensive risk controls and systematic processes protect both trader and firm capital.",
        // details: [
        //     "Automated stop-loss systems",
        //     "Position size limits",
        //     "Daily loss caps",
        //     "Real-time monitoring",
        // ],
        color: "pacific",
    },
    {
        icon: TrendingUp,
        title: "Performance Analytics",
        description:
            "Advanced tracking and analysis tools help you understand and improve your trading performance.",
        // details: [
        //     "Real-time P&L tracking",
        //     "Detailed trade journals",
        //     "Performance metrics",
        //     "Improvement insights",
        // ],
        color: "bamber",
    },
    {
        icon: Zap,
        title: "Capital Backing",
        description:
            "Trade with firm capital, not your personal savings. Scale your success without financial risk.",
        // details: [
        //     "100% firm capital",
        //     "No personal investment",
        //     "Scalable allocations",
        //     "Performance-based increases",
        // ],
        color: "pacific",
    },
    {
        icon: GraduationCap,
        title: "Continuous Learning",
        description:
            "Ongoing education and skill development ensure you stay ahead in evolving markets.",
        // details: [
        //     "Regular training sessions",
        //     "Market analysis workshops",
        //     "New strategy introductions",
        //     "Industry best practices",
        // ],
        color: "bamber",
    },
];

export default function CoreFeatures() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-1/4 -left-20 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute -right-20 bottom-1/4 h-96 w-96 rounded-full blur-3xl" />

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
                        Core Features
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Comprehensive support systems designed to help you
                        thrive as a professional trader.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isPacific = feature.color === "pacific";

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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div
                                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 shadow-pacific-200 bg-linear-to-br"
                                            : "from-bamber-500 to-bamber-600 shadow-bamber-200 bg-linear-to-br"
                                    }`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-twilight-600 mb-4 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Accent */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
                                        isPacific
                                            ? "from-pacific-500 to-bamber-500 bg-linear-to-r"
                                            : "from-bamber-500 to-pacific-500 bg-linear-to-r"
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
