"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Vishal Kumar",
        designation: "Founder & CEO",
        experience: "20+ years in Trading",
        image: "/assets/team/member-1.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
    {
        name: "Priya Sharma",
        designation: "Head of Trading",
        experience: "12+ years in Markets",
        image: "/assets/team/member-2.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
    {
        name: "Amit Patel",
        designation: "Chief Technology Officer",
        experience: "10+ years in FinTech",
        image: "/assets/team/member-3.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
    {
        name: "Sneha Verma",
        designation: "Head of Training",
        experience: "8+ years in Education",
        image: "/assets/team/member-4.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
    {
        name: "Vikram Singh",
        designation: "Senior Trader",
        experience: "10+ years Trading Experience",
        image: "/assets/team/member-5.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
    {
        name: "Anjali Reddy",
        designation: "Risk Manager",
        experience: "9+ years in Risk Management",
        image: "/assets/team/member-6.jpg", // Placeholder
        linkedin: "https://linkedin.com/in/example",
    },
];

export default function Leadership() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-100/40 absolute top-20 -left-20 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-bamber-100/40 absolute -right-20 bottom-20 h-96 w-96 rounded-full blur-3xl" />

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
                        <Users size={16} />
                        <span>Our Team</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Meet Our{" "}
                        <span className="text-pacific-600">Leadership</span>
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Experienced professionals dedicated to building the
                        future of proprietary trading in India.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group border-twilight-100 hover:border-pacific-300 hover:shadow-pacific-100 relative overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="from-pacific-100 to-twilight-100 relative aspect-4/5 overflow-hidden bg-linear-to-br">
                                {/* Placeholder for image */}
                                <div className="flex h-full w-full items-center justify-center">
                                    <div className="from-pacific-500 to-pacific-600 flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br text-5xl font-bold text-white">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                {/* Replace above div with actual image when available:
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                */}

                                {/* LinkedIn Overlay */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pacific-600 hover:bg-pacific-600 absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:text-white"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-twilight-900 mb-2 text-xl font-bold">
                                    {member.name}
                                </h3>
                                <p className="text-pacific-700 mb-2 font-semibold">
                                    {member.designation}
                                </p>
                                <p className="text-twilight-600 text-sm">
                                    {member.experience}
                                </p>
                            </div>

                            {/* Hover Accent */}
                            <div className="from-pacific-500 to-bamber-500 absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                {/* View All Team Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center"
                >
                    <Link
                        href="/team"
                        className="group border-pacific-500 bg-pacific-500/10 text-pacific-700 hover:bg-pacific-500 hover:shadow-pacific-500/30 inline-flex items-center gap-3 rounded-xl border-2 px-8 py-4 text-base font-semibold transition-all duration-300 hover:text-white hover:shadow-lg"
                    >
                        View All Team Members
                        <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
