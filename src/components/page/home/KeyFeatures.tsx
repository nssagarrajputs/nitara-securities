"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, UserCheck, Award, Headphones } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Community Engagement",
        description:
            "Join a collaborative trading environment where knowledge sharing, peer learning, and collective growth are at the heart of our culture.",
        highlights: [
            "Daily trading discussions",
            "Strategy sharing sessions",
            "Collaborative learning",
        ],
    },
    {
        icon: UserCheck,
        title: "Dedicated Account Manager",
        description:
            "Every trader is assigned a personal account manager to provide ongoing support, answer questions, and help optimize your trading journey.",
        highlights: [
            "Personal point of contact",
            "Regular check-ins",
            "Performance reviews",
        ],
    },
    {
        icon: Award,
        title: "Expert-Led Mentorship",
        description:
            "Learn from seasoned professionals with years of market experience. Get guidance on strategy development, risk management, and trading psychology.",
        highlights: [
            "One-on-one mentoring",
            "Strategy development",
            "Real-time feedback",
        ],
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description:
            "Access round-the-clock technical and trading support. Whether it's platform issues, market queries, or urgent assistance, we're always here.",
        highlights: [
            "Technical support",
            "Trading assistance",
            "Always available",
        ],
    },
];

export default function KeyFeatures() {
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
                    <div className="border-pacific-200 bg-pacific-50 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold">
                        <Award size={16} />
                        <span>What Sets Us Apart</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        More Than Just{" "}
                        <span className="text-pacific-600">
                            Capital & Technology
                        </span>
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        At Nitara Securities, we invest in people. Our
                        comprehensive support system ensures you have everything
                        you need to succeed as a professional trader.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="from-pacific-500 to-pacific-600 shadow-pacific-200 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-twilight-600 mb-4 text-sm">
                                    {feature.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2">
                                    {feature.highlights.map(
                                        (highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="text-twilight-700 flex items-center gap-2 text-sm"
                                            >
                                                <div className="bg-pacific-500 h-1.5 w-1.5 rounded-full" />
                                                {highlight}
                                            </li>
                                        ),
                                    )}
                                </ul>

                                {/* Hover Accent */}
                                <div className="from-pacific-500 to-bamber-500 absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
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
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-twilight-600 text-lg">
                        Our commitment to your success goes beyond providing
                        capital—we build traders for the long term.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
