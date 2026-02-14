"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Make a Call",
        description:
            "Reach out to us. We'll have a quick conversation to understand your background and trading interests.",
        color: "pacific",
    },
    {
        number: "02",
        icon: MessageSquare,
        title: "Discuss Your Background",
        description:
            "Share your trading experience. Whether you're seasoned or just starting, we'll find the right path for you.",
        color: "bamber",
    },
    {
        number: "03",
        icon: Calendar,
        title: "Schedule Your Interview",
        description:
            "If there's a fit, we'll schedule a formal interview. Come to discuss your approach and learn about us.",
        color: "pacific",
    },
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="how-it-works"
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

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
                        <ArrowRight size={16} />
                        <span>Simple Process</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        How It Works
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        Getting started with Nitara Securities is
                        straightforward. Just three simple steps to begin your
                        trading journey.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connection Line - Desktop Only */}
                    <div className="from-pacific-200 via-bamber-200 to-pacific-200 absolute top-24 right-0 left-0 hidden h-0.5 bg-linear-to-r lg:block" />

                    {/* Steps Grid */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isPacific = step.color === "pacific";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 40 }
                                    }
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                    }}
                                    className="relative"
                                >
                                    {/* Step Card */}
                                    <div className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl">
                                        {/* Step Number Badge */}
                                        <div
                                            className={`absolute -top-4 left-8 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-lg font-bold ${
                                                isPacific
                                                    ? "from-pacific-500 to-pacific-600 bg-linear-to-br text-white"
                                                    : "from-bamber-500 to-bamber-600 text-twilight-900 bg-linear-to-br"
                                            } shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${
                                                isPacific
                                                    ? "bg-pacific-100 text-pacific-600"
                                                    : "bg-bamber-100 text-bamber-700"
                                            } transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <Icon size={32} />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-twilight-900 mb-3 text-2xl font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="text-twilight-600 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Hover Accent */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl ${
                                                isPacific
                                                    ? "from-pacific-500 to-pacific-600 bg-linear-to-r"
                                                    : "from-bamber-500 to-bamber-600 bg-linear-to-r"
                                            } transition-all duration-300 group-hover:w-full`}
                                        />
                                    </div>

                                    {/* Arrow Between Steps - Desktop Only */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 lg:block">
                                            <ArrowRight
                                                className="text-twilight-300"
                                                size={24}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    )}

                                    {/* Arrow Between Steps - Mobile Only */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center py-4 lg:hidden">
                                            <ArrowRight
                                                className="text-twilight-300 rotate-90"
                                                size={24}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="border-pacific-200 from-pacific-50 to-bamber-50/30 mx-auto max-w-2xl rounded-2xl border-2 bg-linear-to-br p-8 md:p-10">
                        <h3 className="text-twilight-900 mb-4 text-2xl font-bold md:text-3xl">
                            Ready to Get Started?
                        </h3>
                        <p className="text-twilight-700 mb-6 text-lg leading-relaxed">
                            The first step is simple. Reach out and {" let's "}
                            discuss how we can support your trading career.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="tel:+917503975037"
                                className="group bg-bamber-500 text-twilight-900 shadow-bamber-500/30 hover:bg-bamber-400 hover:shadow-bamber-500/40 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 sm:w-auto"
                            >
                                <Phone size={20} />
                                Call Now: 75039 75037
                            </Link>
                            <Link
                                href="/contact"
                                className="group border-pacific-500 bg-pacific-500/10 text-pacific-700 hover:bg-pacific-500/20 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all duration-300 sm:w-auto"
                            >
                                Contact Us
                                <ArrowRight
                                    size={20}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
