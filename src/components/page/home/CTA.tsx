"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-gradient-to-br px-4 py-20 lg:py-32"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Gradient Orbs */}
            <div className="bg-pacific-500/20 absolute top-0 -left-40 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-500/20 absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-5xl text-center">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                        Ready to Start{" "}
                        <span className="from-pacific-400 to-bamber-400 bg-gradient-to-r bg-clip-text text-transparent">
                            Trading?
                        </span>
                    </h2>
                    <p className="text-twilight-200 mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                        Join Nitara Securities and take the first step toward a
                        professional trading career. Whether you're experienced
                        or just starting out, we're here to support your
                        journey.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/careers"
                        className="group bg-bamber-500 text-twilight-900 shadow-bamber-500/30 hover:bg-bamber-400 hover:shadow-bamber-500/40 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 sm:w-auto"
                    >
                        Apply Now
                        <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                    <Link
                        href="/contact"
                        className="group border-pacific-500 bg-pacific-500/10 hover:bg-pacific-500/20 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 sm:w-auto"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* Contact Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
                >
                    <a
                        href="tel:+917503975037"
                        className="group text-twilight-200 flex items-center gap-3 transition-colors hover:text-white"
                    >
                        <div className="bg-pacific-500/20 text-pacific-400 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                            <Phone size={20} />
                        </div>
                        <div className="text-left">
                            <div className="text-twilight-400 text-sm">
                                Call us at
                            </div>
                            <div className="font-semibold">75039 75037</div>
                        </div>
                    </a>

                    <div className="bg-twilight-600 hidden h-12 w-px sm:block" />

                    <a
                        href="mailto:info@nitarasecurities.com"
                        className="group text-twilight-200 flex items-center gap-3 transition-colors hover:text-white"
                    >
                        <div className="bg-bamber-500/20 text-bamber-400 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                            <Mail size={20} />
                        </div>
                        <div className="text-left">
                            <div className="text-twilight-400 text-sm">
                                Email us at
                            </div>
                            <div className="font-semibold">
                                info@nitarasecurities.com
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
