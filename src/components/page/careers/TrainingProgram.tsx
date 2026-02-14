"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Brain, Shield, GraduationCap } from "lucide-react";

const modules = [
    {
        icon: BookOpen,
        title: "Market Analysis",
        description:
            "Learn the basics of markets. Understand structure, instruments, and terminology. Master patterns, indicators, and Identifying entries/exits",
    },
    {
        icon: Shield,
        title: "Risk Management",
        description:
            "Develop systematic approaches to position sizing, stop-loss placement, and portfolio risk control.",
    },
    {
        icon: Brain,
        title: "Trading Psychology",
        description:
            "Build mental discipline, emotional control, and the psychological resilience needed for professional trading.",
    },
];

export default function TrainingProgram() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="from-twilight-50 to-pacific-50/30 relative overflow-hidden bg-linear-to-br px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-200/30 absolute top-20 -right-20 h-80 w-80 rounded-full blur-3xl" />
            <div className="bg-bamber-200/30 absolute bottom-20 -left-20 h-80 w-80 rounded-full blur-3xl" />

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
                    <div className="border-bamber-200 text-bamber-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                        <GraduationCap size={16} />
                        <span>For Newcomers</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Comprehensive{" "}
                        <span className="text-bamber-600">
                            Training Program
                        </span>
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Our structured curriculum takes you from basics to
                        professional execution, with hands-on mentorship every
                        step of the way.
                    </p>
                </motion.div>

                {/* Training Modules */}
                <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module, index) => {
                        const Icon = module.icon;

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
                                className="group border-twilight-100 hover:border-bamber-300 hover:shadow-bamber-100 rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="from-bamber-500 to-bamber-600 shadow-bamber-200 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {module.title}
                                </h3>
                                <p className="text-twilight-600 leading-relaxed">
                                    {module.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Training Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="border-bamber-200 to-bamber-50/50 rounded-2xl border-2 bg-linear-to-br from-white p-8 md:p-10"
                >
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="text-bamber-600 mb-3 text-4xl font-bold">
                                6-12 Weeks
                            </div>
                            <div className="text-twilight-600 text-sm font-medium tracking-wide uppercase">
                                Program Duration
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-bamber-600 mb-3 text-4xl font-bold">
                                1:1
                            </div>
                            <div className="text-twilight-600 text-sm font-medium tracking-wide uppercase">
                                Mentorship Ratio
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-bamber-600 mb-3 text-4xl font-bold">
                                100%
                            </div>
                            <div className="text-twilight-600 text-sm font-medium tracking-wide uppercase">
                                NISM Support
                            </div>
                        </div>
                    </div>

                    <div className="border-bamber-200 mt-8 border-t pt-8 text-center">
                        <p className="text-twilight-700 text-lg leading-relaxed">
                            Upon completion of training and obtaining NISM
                            certification, {"you'll"} begin trading with firm
                            capital under ongoing mentorship and support.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
