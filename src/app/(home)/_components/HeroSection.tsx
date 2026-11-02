import Link from "next/link";
import { Zap } from "lucide-react";

function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 py-40 sm:px-8 lg:px-12">
            {/* halka accent glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 h-96 w-3/4 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--color-canvas-accent),transparent_70%)] opacity-[0.12]"
            />

            <div className="relative mx-auto max-w-4xl text-center">
                {/* Eyebrow */}
                <p className="text-small text-primary inline-flex items-center gap-2 font-semibold">
                    <span aria-hidden className="bg-canvas-accent size-2 rounded-full" />
                    Funded trading for the Indian markets
                </p>

                <h1 className="text-h1 text-pen-primary mt-6 leading-[1.1] font-black text-balance">
                    Get up to{" "}
                    <span className="from-primary to-canvas-accent bg-linear-to-r bg-clip-text text-transparent">
                        30X Leverage
                    </span>{" "}
                    to trade in the stock market.
                </h1>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#"
                        className="bg-canvas-white rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold sm:w-auto"
                    >
                        Get funded now
                        <Zap size={20} strokeWidth={2} aria-hidden />
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="rounded-2 border-canvas-white/30 text-body text-pen-primary smooth-transition hover:border-canvas-white/60 hover:bg-canvas-white/5 flex w-full items-center justify-center border px-6 py-3 font-semibold sm:w-auto"
                    >
                        How it works
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
