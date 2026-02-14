"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

export default function OurStory() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Our Story
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto h-1 w-24 rounded-full bg-gradient-to-r" />
                </motion.div>

                {/* Story Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-twilight-700 mb-16 space-y-6 text-lg leading-relaxed"
                >
                    <p>
                        Nitara Securities was founded with a clear vision: to
                        create a structured environment where talented
                        individuals could build successful trading careers
                        without the barrier of personal capital requirements.
                    </p>
                    <p>
                        We recognized that many skilled traders and aspiring
                        professionals were limited not by ability, but by access
                        to capital, technology, and mentorship. Our proprietary
                        trading desk model eliminates these barriers, providing
                        everything needed for success under one roof.
                    </p>
                    <p>
                        Today, we operate as a disciplined trading desk focused
                        on the Indian financial markets, combining
                        institutional-grade technology, systematic risk
                        management, and a culture of continuous learning.
                    </p>
                </motion.div>

                {/* Mission & Vision Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="border-twilight-100 from-pacific-50 rounded-2xl border-2 bg-gradient-to-br to-white p-8 text-center"
                    >
                        <div className="mb-4 flex justify-center">
                            <div className="from-pacific-500 to-pacific-600 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                <Lightbulb size={32} />
                            </div>
                        </div>
                        <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                            Our Mission
                        </h3>
                        <p className="text-twilight-600 leading-relaxed">
                            To empower traders with capital, technology, and
                            knowledge, enabling them to achieve professional
                            success in the financial markets.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="border-twilight-100 from-bamber-50 rounded-2xl border-2 bg-gradient-to-br to-white p-8 text-center"
                    >
                        <div className="mb-4 flex justify-center">
                            <div className="from-bamber-500 to-bamber-600 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                <Target size={32} />
                            </div>
                        </div>
                        <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                            Our Vision
                        </h3>
                        <p className="text-twilight-600 leading-relaxed">
                            To be India's leading proprietary trading desk,
                            known for developing exceptional traders and
                            maintaining institutional excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="border-twilight-100 from-pacific-50 rounded-2xl border-2 bg-gradient-to-br to-white p-8 text-center"
                    >
                        <div className="mb-4 flex justify-center">
                            <div className="from-pacific-500 to-pacific-600 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                <TrendingUp size={32} />
                            </div>
                        </div>
                        <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                            Our Approach
                        </h3>
                        <p className="text-twilight-600 leading-relaxed">
                            Disciplined execution, systematic risk management,
                            and process-driven trading backed by cutting-edge
                            technology and mentorship.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
