"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        primary: "75039 75037",
        secondary: "Monday - Saturday, 9:00 AM - 6:00 PM",
        href: "tel:+917503975037",
        color: "pacific",
    },
    {
        icon: Mail,
        title: "Email",
        primary: "info@nitarasecurities.com",
        secondary: "We'll respond within 24 hours",
        href: "mailto:info@nitarasecurities.com",
        color: "bamber",
    },
    {
        icon: MapPin,
        title: "Address",
        primary: "Angel Mega Mall, Ghaziabad-UP",
        secondary: "India",
        href: null,
        color: "pacific",
    },
];

export default function ContactMethods() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
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
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl">
                        Contact Information
                    </h2>
                    <p className="text-twilight-600 mx-auto max-w-2xl text-lg leading-relaxed">
                        Choose your preferred way to connect with us
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const isPacific = method.color === "pacific";

                        const card = (
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
                                className={`group relative overflow-hidden rounded-2xl border-2 p-8 text-center transition-all duration-300 ${
                                    isPacific
                                        ? "border-pacific-200 from-pacific-50 hover:border-pacific-400 bg-linear-to-br to-white"
                                        : "border-bamber-200 from-bamber-50 hover:border-bamber-400 bg-linear-to-br to-white"
                                } ${method.href ? "cursor-pointer hover:shadow-xl" : ""}`}
                            >
                                {/* Icon */}
                                <div
                                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 shadow-pacific-200 bg-linear-to-br"
                                            : "from-bamber-500 to-bamber-600 shadow-bamber-200 bg-linear-to-br"
                                    }`}
                                >
                                    <Icon size={32} />
                                </div>

                                {/* Title */}
                                <h3 className="text-twilight-900 mb-3 text-xl font-bold">
                                    {method.title}
                                </h3>

                                {/* Primary Info */}
                                <p
                                    className={`mb-2 text-lg font-semibold ${
                                        isPacific
                                            ? "text-pacific-700"
                                            : "text-bamber-700"
                                    }`}
                                >
                                    {method.primary}
                                </p>

                                {/* Secondary Info */}
                                <p className="text-twilight-600 text-sm">
                                    {method.secondary}
                                </p>

                                {/* Hover Accent */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
                                        isPacific
                                            ? "from-pacific-500 to-pacific-600 bg-linear-to-r"
                                            : "from-bamber-500 to-bamber-600 bg-linear-to-r"
                                    }`}
                                />
                            </motion.div>
                        );

                        // Wrap in link if href exists
                        return method.href ? (
                            <a key={index} href={method.href}>
                                {card}
                            </a>
                        ) : (
                            card
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
