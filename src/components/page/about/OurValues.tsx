"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Lightbulb, HeartHandshake } from "lucide-react";

const values = [
    {
        icon: Eye,
        title: "Transparency",
        description:
            "We operate with complete openness about our processes, expectations, and performance metrics. No hidden agendas, just honest communication.",
        color: "pacific",
    },
    {
        icon: Target,
        title: "Discipline",
        description:
            "Success in trading requires systematic execution and adherence to proven processes. We instill discipline at every level of our operations.",
        color: "bamber",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We continuously improve our technology, strategies, and training methods to stay ahead in the ever-evolving financial markets.",
        color: "pacific",
    },
    {
        icon: HeartHandshake,
        title: "Support",
        description:
            "Every trader's success is our success. We provide unwavering support, mentorship, and resources to help you reach your full potential.",
        color: "bamber",
    },
];

export default function OurValues() {
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
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Our Core Values
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        These principles guide everything we do, from how we
                        trade to how we develop our people.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        const isPacific = value.color === "pacific";

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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative overflow-hidden rounded-2xl border-2 bg-white p-8 text-center transition-all duration-300 hover:shadow-xl"
                            >
                                <div
                                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                                        isPacific
                                            ? "from-pacific-500/20 to-pacific-600/20 text-pacific-600 bg-gradient-to-br"
                                            : "from-bamber-500/20 to-bamber-600/20 text-bamber-600 bg-gradient-to-br"
                                    }`}
                                >
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-twilight-900 mb-3 text-2xl font-bold">
                                    {value.title}
                                </h3>
                                <p className="text-twilight-600 leading-relaxed">
                                    {value.description}
                                </p>

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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="border-pacific-200 from-pacific-50 to-bamber-50/30 mx-auto max-w-3xl rounded-2xl border-2 bg-gradient-to-br p-8 md:p-10">
                        <h3 className="text-twilight-900 mb-4 text-2xl font-bold md:text-3xl">
                            Join Our Team
                        </h3>
                        <p className="text-twilight-700 mb-6 text-lg leading-relaxed">
                            If you're ready to build a trading career in an
                            environment that values integrity, discipline, and
                            growth, we'd love to hear from you.
                        </p>
                        <a
                            href="/careers"
                            className="bg-bamber-500 text-twilight-900 hover:bg-bamber-400 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                        >
                            Explore Careers
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
