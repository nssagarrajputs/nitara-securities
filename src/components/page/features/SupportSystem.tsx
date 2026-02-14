"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Headphones,
    MessageCircle,
    Video,
    Mail,
    Phone,
    Clock,
} from "lucide-react";

const supportChannels = [
    {
        icon: Phone,
        title: "Phone Support",
        description: "Direct phone line to our support team",
        availability: "Mon-Sat, 9 AM - 6 PM",
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Instant messaging with support staff",
        availability: "Trading hours",
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Detailed inquiries and documentation",
        availability: "24/7",
    },
    {
        icon: Video,
        title: "Video Calls",
        description: "Screen sharing for technical issues",
        availability: "By appointment",
    },
];

export default function SupportSystem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
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
                    <div className="border-pacific-200 bg-pacific-50 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold">
                        <Headphones size={16} />
                        <span>Support System</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Always Here When You{" "}
                        <span className="text-pacific-600">Need Us</span>
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Our comprehensive support system ensures {"you're"}{" "}
                        never alone in your trading journey.
                    </p>
                </motion.div>

                {/* Support Channels */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {supportChannels.map((channel, index) => {
                        const Icon = channel.icon;

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
                                className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 rounded-2xl border-2 bg-white p-6 text-center transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="from-pacific-500 to-pacific-600 shadow-pacific-200 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-twilight-900 mb-2 text-lg font-bold">
                                    {channel.title}
                                </h3>
                                <p className="text-twilight-600 mb-3 text-sm">
                                    {channel.description}
                                </p>
                                <div className="space-y-1 text-xs">
                                    <div className="text-pacific-700 flex items-center justify-center gap-1">
                                        <Clock size={12} />
                                        <span>{channel.availability}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
