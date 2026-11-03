import Link from "next/link";
import { ArrowRight } from "lucide-react";

function EdgeBanner() {
    return (
        <section className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-12 lg:py-40">
            {/* halka accent glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-canvas-accent),transparent_60%)] opacity-[0.08]"
            />

            <div className="relative mx-auto max-w-5xl text-center">
                <h2 className="text-d1 text-pen-primary leading-[1.05] font-black text-balance">
                    You don’t just get funded
                    <span className="from-primary to-canvas-accent block bg-linear-to-r bg-clip-text text-transparent">
                        You get an edge
                    </span>
                </h2>

                <p className="text-h4 text-pen-secondary mt-8">Start today.</p>

                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Link
                        href="#"
                        className="cta-btn-gradient rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary flex items-center gap-2 px-8 py-4 font-semibold"
                    >
                        Call now +91 87961 40949
                    </Link>

                    <Link
                        href="/contact"
                        className="group text-body text-pen-secondary hover:text-pen-primary smooth-transition inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
                    >
                        Need help?
                        <ArrowRight
                            size={20}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EdgeBanner;
