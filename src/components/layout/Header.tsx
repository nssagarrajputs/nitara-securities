"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-pacific sticky top-0 z-50 border-b-2 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/assets/logo/wordmark-light.svg"
                        alt="Nitara Securities"
                        width={150}
                        height={40}
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="text-twilight *:hover:text-pacific *:hover:border-bamber hidden gap-8 tracking-wide *:hover:border-b-2 md:flex">
                    <Link href="#">How its work</Link>
                    <Link href="#">Platform</Link>
                    <Link href="#">Rules</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">Get in touch</Link>
                </nav>

                {/* CTA Header */}
                <div className="flex gap-4">
                    <Link
                        href="#"
                        className="bg-bamber text-twilight rounded p-3 px-4 text-center font-semibold"
                    >
                        Join Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="border-pacific absolute w-full border-y-2 bg-white/95 md:hidden">
                    <ul className="text-twilight **:hover:text-pacific flex flex-col items-center justify-center gap-4 px-4 py-8 font-semibold tracking-wider **:hover:underline">
                        <li>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/how-it-works"
                                onClick={() => setIsOpen(false)}
                            >
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/platform"
                                onClick={() => setIsOpen(false)}
                            >
                                Platform
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/rules"
                                onClick={() => setIsOpen(false)}
                            >
                                Rules
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/community"
                                onClick={() => setIsOpen(false)}
                            >
                                Community
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" onClick={() => setIsOpen(false)}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
