"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, GraduationCap, CheckCircle2 } from "lucide-react";

const experiencedFeatures = [
    "Immediate access to trading capital",
    "Competitive profit-sharing structure",
    "Advanced platform and tools",
    "Autonomy in strategy execution",
    "Professional trading environment",
    "Performance-based incentives",
];

const newcomerFeatures = [
    "Comprehensive training program",
    "NISM certification support",
    "Expert mentorship and guidance",
    "Gradual capital allocation",
    "Structured learning path",
    "Career development opportunities",
];

const experiencedRequirements = [
    "Proven trading track record",
    "NISM certification (or willingness to obtain)",
    "Understanding of risk management",
    "Knowledge of Indian markets",
];

const newcomerRequirements = [
    "Strong analytical skills",
    "Discipline and willingness to learn",
    "Basic understanding of markets (preferred)",
    "Commitment to professional development",
];

export default function DualPath() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="dual-path"
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
                        Choose Your Path
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        We welcome both seasoned professionals and ambitious
                        newcomers. Select the path that matches your experience
                        level.
                    </p>
                </motion.div>

                {/* Dual Path Cards */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Experienced Traders */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group border-pacific-200 from-pacific-50 hover:border-pacific-400 relative overflow-hidden rounded-2xl border-2 bg-linear-to-br to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* Icon */}
                        <div className="from-pacific-500 to-pacific-600 shadow-pacific-200 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg">
                            <TrendingUp size={32} />
                        </div>

                        {/* Title */}
                        <h3 className="text-twilight-900 mb-4 text-3xl font-bold">
                            Experienced Traders
                        </h3>
                        <p className="text-twilight-700 mb-6 text-lg leading-relaxed">
                            Already have trading experience? Join our desk and
                            leverage our capital, technology, and institutional
                            resources to scale your success.
                        </p>

                        {/* What We Offer */}
                        <div className="mb-6">
                            <h4 className="text-pacific-700 mb-4 text-lg font-semibold">
                                What We Offer
                            </h4>
                            <ul className="space-y-3">
                                {experiencedFeatures.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-pacific-600 mt-0.5 shrink-0"
                                            size={20}
                                        />
                                        <span className="text-twilight-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                            <h4 className="text-pacific-700 mb-4 text-lg font-semibold">
                                Requirements
                            </h4>
                            <ul className="space-y-2">
                                {experiencedRequirements.map((req, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <div className="bg-pacific-500 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                                        <span className="text-twilight-600 text-sm">
                                            {req}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hover Accent */}
                        <div className="from-pacific-500 to-pacific-600 absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
                    </motion.div>

                    {/* Newcomers */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group border-bamber-200 from-bamber-50 hover:border-bamber-400 relative overflow-hidden rounded-2xl border-2 bg-linear-to-br to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* Icon */}
                        <div className="from-bamber-500 to-bamber-600 shadow-bamber-200 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg">
                            <GraduationCap size={32} />
                        </div>

                        {/* Title */}
                        <h3 className="text-twilight-900 mb-4 text-3xl font-bold">
                            Newcomers / Freshers
                        </h3>
                        <p className="text-twilight-700 mb-6 text-lg leading-relaxed">
                            New to trading? {"We'll"} train you from the ground
                            up with professional education, NISM support, and
                            mentorship to build a lasting career.
                        </p>

                        {/* What We Offer */}
                        <div className="mb-6">
                            <h4 className="text-bamber-700 mb-4 text-lg font-semibold">
                                What We Offer
                            </h4>
                            <ul className="space-y-3">
                                {newcomerFeatures.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-bamber-600 mt-0.5 shrink-0"
                                            size={20}
                                        />
                                        <span className="text-twilight-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                            <h4 className="text-bamber-700 mb-4 text-lg font-semibold">
                                Requirements
                            </h4>
                            <ul className="space-y-2">
                                {newcomerRequirements.map((req, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <div className="bg-bamber-500 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                                        <span className="text-twilight-600 text-sm">
                                            {req}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hover Accent */}
                        <div className="from-bamber-500 to-bamber-600 absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
