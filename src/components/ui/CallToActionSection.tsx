import Link from "next/link";
import { Mail, Phone, Zap } from "lucide-react";

function CallToActionSection() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="rounded-4 border-canvas-white/15 relative mx-auto max-w-6xl overflow-hidden border px-6 py-16 text-center sm:px-12 sm:py-20">
                {/* halka accent glow */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,var(--color-canvas-accent),transparent_65%)] opacity-[0.1]"
                />

                <div className="relative mx-auto max-w-2xl">
                    <h2 className="text-h2 text-pen-primary font-bold">
                        Ready to Get Your Account Funded?
                    </h2>
                    <p className="text-large text-pen-secondary mt-6 leading-relaxed">
                        Join Nitara Securities and take the first step toward a
                        professional trading career. Trade with our own proprietary
                        software, and know that we&apos;re here to support your journey
                        every step of the way.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#"
                            className="bg-canvas-white rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold sm:w-auto"
                        >
                            Get funded upto 30X Leverage
                            <Zap size={20} strokeWidth={2} aria-hidden />
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-2 border-canvas-white/30 text-body text-pen-primary smooth-transition hover:border-canvas-white/60 hover:bg-canvas-white/5 flex w-full items-center justify-center border px-6 py-3 font-semibold sm:w-auto"
                        >
                            Contact us
                        </Link>
                    </div>

                    <div className="text-small text-pen-muted mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                        <a
                            href="tel:+918796140949"
                            className="hover:text-primary smooth-transition flex items-center gap-2"
                        >
                            <Phone size={18} aria-hidden className="text-primary" />
                            Call us at 8796140949
                        </a>
                        <a
                            href="mailto:info@nitarasecurities.com"
                            className="hover:text-primary smooth-transition flex items-center gap-2"
                        >
                            <Mail size={18} aria-hidden className="text-primary" />
                            Email us at info@nitarasecurities.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionSection;
