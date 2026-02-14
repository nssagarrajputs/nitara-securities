"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="from-twilight-900 via-twilight-800 to-pacific-900 relative min-h-screen overflow-hidden bg-linear-to-br pt-24 lg:pt-32">
            {/* Background Pattern/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-size-[4rem_4rem]" />

            {/* Gradient Orbs */}
            <div className="bg-pacific-500/20 absolute top-0 -left-40 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-500/10 absolute top-40 -right-40 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 lg:pt-20 lg:pb-32">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="border-pacific-500/30 bg-pacific-500/10 text-pacific-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm">
                            <TrendingUp size={16} />
                            <span>Nitara Securities</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 max-w-4xl text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
                    >
                        Trade with Capital,{" "}
                        <span className="relative">
                            <span className="from-pacific-400 to-bamber-400 relative z-10 bg-linear-to-r bg-clip-text text-transparent">
                                Not Your Own Money
                            </span>
                            <span className="bg-bamber-500/30 absolute -bottom-2 left-0 h-3 w-full blur-sm" />
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-twilight-200 mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
                    >
                        Join {"India's"} premier proprietary trading desk. We
                        provide capital, technology, and mentorship for both
                        experienced traders and newcomers ready to build a
                        career in the markets.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-16 flex flex-col gap-4 sm:flex-row"
                    >
                        <Link
                            href="/careers"
                            className="group bg-bamber-500 text-twilight-900 shadow-bamber-500/30 hover:bg-bamber-400 hover:shadow-bamber-500/40 flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                        >
                            Start Your Journey
                            <ArrowRight
                                size={20}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="group border-pacific-500 bg-pacific-500/10 hover:bg-pacific-500/20 flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300"
                        >
                            How It Works
                        </Link>
                    </motion.div>

                    {/* Trust Indicators / Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        <div className="border-pacific-500/20 bg-twilight-800/50 flex flex-col items-center rounded-xl border p-6 backdrop-blur-sm">
                            <div className="bg-pacific-500/20 mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                                <Shield
                                    className="text-pacific-400"
                                    size={24}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                100%
                            </h3>
                            <p className="text-twilight-300 text-sm">
                                Capital Funded
                            </p>
                        </div>

                        <div className="border-pacific-500/20 bg-twilight-800/50 flex flex-col items-center rounded-xl border p-6 backdrop-blur-sm">
                            <div className="bg-bamber-500/20 mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                                <Users className="text-bamber-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                24/7
                            </h3>
                            <p className="text-twilight-300 text-sm">
                                Support System
                            </p>
                        </div>

                        <div className="border-pacific-500/20 bg-twilight-800/50 flex flex-col items-center rounded-xl border p-6 backdrop-blur-sm">
                            <div className="bg-pacific-500/20 mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                                <TrendingUp
                                    className="text-pacific-400"
                                    size={24}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                NSE + BSE
                            </h3>
                            <p className="text-twilight-300 text-sm">
                                Multi-Market Access
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
