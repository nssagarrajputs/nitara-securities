"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageSquare, Calendar, UserCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Initial Contact",
        // description:
        //     "Reach out via phone or email. We'll have a brief conversation to understand your background and career goals.",
    },
    {
        number: "02",
        icon: MessageSquare,
        title: "Background Discussion",
        // description:
        //     "Share your experience, qualifications, and what you're looking for. We'll explain our model and answer your questions.",
    },
    {
        number: "03",
        icon: Calendar,
        title: "Formal Interview",
        // description:
        //     "If there's mutual interest, we'll schedule an in-depth interview to assess fit, discuss expectations, and next steps.",
    },
    {
        number: "04",
        icon: UserCheck,
        title: "Onboarding",
        // description:
        //     "Upon selection, you'll begin onboarding, training (if applicable), and integration into our trading desk.",
    },
];

export default function ApplicationProcess() {
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
                        Application Process
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        Our straightforward process is designed to be
                        transparent and efficient for both parties.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Step Number */}
                                <div className="from-pacific-500 to-pacific-600 absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-linear-to-br text-sm font-bold text-white shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="bg-pacific-100 text-pacific-600 mt-4 mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>

                                {/* Content */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {step.title}
                                </h3>
                                {/* <p className="text-twilight-600 leading-relaxed">
                                    {step.description}
                                </p> */}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
