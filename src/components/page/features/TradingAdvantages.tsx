"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TradingAdvantages() {
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
                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="border-pacific-200 to-pacific-50/50 mx-auto max-w-3xl rounded-2xl border-2 bg-linear-to-br from-white p-8 md:p-10">
                        <h3 className="text-twilight-900 mb-4 text-2xl font-bold md:text-3xl">
                            Ready to Explore Nitara Securities?
                        </h3>
                        <p className="text-twilight-700 mb-6 text-lg leading-relaxed">
                            Join our trading desk and leverage all these
                            benefits to build a sustainable, profitable trading
                            career.
                        </p>
                        <a
                            href="/careers"
                            className="bg-bamber-500 text-twilight-900 hover:bg-bamber-400 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                        >
                            Explore Career Opportunities
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
