import Image from "next/image";
import Link from "next/link";

import brandLogoImg from "@/assets/brand-kit/ns-logo.svg";

const navLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Terminal", href: "/terminal" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    return (
        <header className="border-canvas-white/10 bg-canvas/60 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xs">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
                {/* Left: logo (+ nav on desktop) */}
                <div className="flex items-center gap-12">
                    <Link href="/" aria-label="Nitara Securities home">
                        <Image
                            src={brandLogoImg}
                            alt="Nitara Securities logo"
                            width={200}
                            className="h-auto w-40 sm:w-48"
                            priority
                        />
                    </Link>

                    <nav aria-label="Main" className="hidden lg:block">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-body text-pen-primary smooth-transition hover:text-primary"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right: CTA (hidden on mobile) */}
                <Link
                    href="#"
                    className="rounded-2 bg-canvas-white text-body text-pen-black smooth-transition hover:bg-pen-secondary hidden items-center gap-2 px-6 py-3 font-semibold sm:flex"
                >
                    Call Now +91 8796140949
                </Link>
            </div>
        </header>
    );
}
