"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Check if link is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header
            className={`border-pacific fixed top-0 z-50 w-full border-b-2 transition-all duration-300 ${
                scrolled
                    ? "bg-white/98 shadow-lg backdrop-blur-sm"
                    : "bg-pacific-50/95 backdrop-blur-sm"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:py-2">
                {/* Logo */}
                <Link href="/" className="transition-opacity hover:opacity-90">
                    <Image
                        src="/assets/logo/wordmark-light.svg"
                        alt="Nitara Securities"
                        width={160}
                        height={45}
                        priority
                        className="h-auto w-36 md:w-40"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative font-medium tracking-wide transition-colors ${
                                    active
                                        ? "text-pacific-700"
                                        : "text-twilight hover:text-pacific-700"
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`bg-bamber absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                                        active
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/careers"
                        className="bg-bamber text-twilight hover:bg-bamber-600 hover:shadow-bamber/20 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                    >
                        Apply Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-twilight hover:bg-pacific-100 relative z-10 rounded p-2 transition-colors md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Mobile Menu */}
                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="border-pacific absolute top-full right-0 left-0 border-b-2 bg-white shadow-xl md:hidden"
                        >
                            <ul className="divide-pacific-100 flex flex-col divide-y px-4 py-2">
                                {navLinks.map((link, index) => {
                                    const active = isActive(link.href);
                                    return (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block py-4 text-base font-medium transition-colors ${
                                                    active
                                                        ? "text-pacific-700 font-bold"
                                                        : "text-twilight hover:text-pacific-700"
                                                }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    {active && (
                                                        <span className="bg-bamber h-2 w-2 rounded-full" />
                                                    )}
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: navLinks.length * 0.1,
                                    }}
                                    className="pt-4"
                                >
                                    <Link
                                        href="/careers"
                                        onClick={() => setIsOpen(false)}
                                        className="bg-bamber text-twilight hover:bg-bamber-600 block w-full rounded-md py-3 text-center text-base font-semibold transition-colors"
                                    >
                                        Apply as Trader
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
