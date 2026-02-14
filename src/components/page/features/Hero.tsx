"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-linear-to-br px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background Pattern */}
            <div className="bg-size[4rem_4rem] absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)]" />

            {/* Gradient Orbs */}
            <div className="bg-pacific-500/20 absolute top-0 -left-40 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-500/20 absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="border-pacific-400/30 bg-pacific-500/10 text-pacific-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                        <Sparkles size={16} />
                        <span>Platform Features</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
                >
                    Everything You Need to{" "}
                    <span className="from-pacific-400 to-bamber-400 bg-linear-to-r bg-clip-text text-transparent">
                        Succeed
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-twilight-200 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl"
                >
                    From institutional-grade technology to comprehensive support
                    systems, discover what makes Nitara Securities the ideal
                    platform for professional traders.
                </motion.p>
            </div>
        </section>
    );
}
