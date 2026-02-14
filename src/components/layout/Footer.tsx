"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPinned, Phone } from "lucide-react";

const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
];

const resources = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Trading Platform", href: "/features#platform" },
    { label: "FAQ", href: "/#faq" },
    { label: "Apply as Trader", href: "/careers" },
];

const contactInfo = [
    {
        icon: Phone,
        label: "75039 75037",
        href: "tel:+917503975037",
        type: "phone",
    },
    {
        icon: Mail,
        label: "info@nitarasecurities.com",
        href: "mailto:info@nitarasecurities.com",
        type: "email",
    },
    {
        icon: MapPinned,
        label: "S9, Angel Mega Mall, Ghaziabad, UP, 201010, India",
        href: null,
        type: "address",
    },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-pacific bg-twilight-950 border-t-2 text-white">
            {/* Main Footer Content */}
            <section className="border-pacific/30 border-t px-4 py-12 lg:py-16">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row lg:gap-16">
                    {/* Brand Section */}
                    <div className="w-full max-w-md">
                        <Link
                            href="/"
                            className="inline-block transition-opacity hover:opacity-80"
                        >
                            <Image
                                src="/assets/logo/wordmark-dark.svg"
                                width={180}
                                height={80}
                                alt="Nitara Securities"
                                className="h-auto w-44"
                            />
                        </Link>
                        <p className="text-twilight-200 mt-6 leading-relaxed">
                            Nitara Securities operates a structured proprietary
                            trading desk focused on disciplined execution, risk
                            management, and process-driven trading in Indian
                            market instruments.
                        </p>
                        <Link
                            href="https://www.linkedin.com/company/nitara-securities"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-pacific hover:text-pacific-400 mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        >
                            Follow us on LinkedIn
                        </Link>
                    </div>

                    {/* Links Grid */}
                    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-pacific mb-5 text-sm font-semibold tracking-wider uppercase">
                                Quick Links
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group text-twilight-300 inline-flex items-center transition-colors hover:text-white"
                                        >
                                            <span className="relative">
                                                {link.label}
                                                <span className="bg-bamber absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-pacific mb-5 text-sm font-semibold tracking-wider uppercase">
                                Resources
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {resources.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group text-twilight-300 inline-flex items-center transition-colors hover:text-white"
                                        >
                                            <span className="relative">
                                                {link.label}
                                                <span className="bg-bamber absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get in Touch */}
                        <div>
                            <h3 className="text-pacific mb-5 text-sm font-semibold tracking-wider uppercase">
                                Get in Touch
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <div className="flex items-start gap-3">
                                            <Icon
                                                size={18}
                                                className="text-pacific mt-0.5 shrink-0"
                                            />
                                            <span
                                                className={
                                                    item.type === "email"
                                                        ? "break-all"
                                                        : ""
                                                }
                                            >
                                                {item.label}
                                            </span>
                                        </div>
                                    );

                                    return (
                                        <li key={index}>
                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    className="group text-twilight-300 hover:text-bamber block transition-colors"
                                                >
                                                    {content}
                                                </Link>
                                            ) : (
                                                <div className="text-twilight-300">
                                                    {content}
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer Section */}
            <section className="border-pacific/30 bg-twilight-900 border-t px-4 py-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h3 className="text-pacific mb-3 text-sm font-semibold tracking-wider uppercase">
                        Important Disclaimer
                    </h3>
                    <p className="text-twilight-300 text-sm leading-relaxed">
                        Nitara Securities does not provide investment advisory
                        services. Participation in trading activities is subject
                        to internal evaluation and desk rules. No guarantees or
                        profit claims are made.
                    </p>
                </div>
            </section>

            {/* Copyright & Legal */}
            <section className="border-pacific/30 border-t px-4 py-6">
                <div className="text-twilight-400 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
                    <p>
                        © {currentYear} Nitara Securities. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {legalLinks.map((link, index) => (
                            <div
                                key={link.href}
                                className="flex items-center gap-4"
                            >
                                {index > 0 && (
                                    <span className="text-twilight-600">•</span>
                                )}
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-white hover:underline"
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                        <span className="text-twilight-600">•</span>
                        <Link
                            href="https://www.tecorbitron.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-white hover:underline"
                        >
                            Made by Tecorbitron
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
