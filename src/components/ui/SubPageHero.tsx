import type { ReactNode } from "react";

type SubPageHeroProps = {
    eyebrow?: string;
    heading: ReactNode; // string ya highlighted <span> wala JSX
};

function SubPageHero({ eyebrow, heading }: SubPageHeroProps) {
    return (
        <section className="relative overflow-hidden px-6 pt-40 pb-16 sm:px-8 lg:px-12">
            {/* halka accent glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 h-72 w-3/4 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--color-canvas-accent),transparent_70%)] opacity-[0.1]"
            />

            <div className="relative mx-auto max-w-3xl text-center">
                {eyebrow && (
                    <p className="text-small text-primary inline-flex items-center gap-2 font-semibold">
                        <span
                            aria-hidden
                            className="bg-canvas-accent size-2 rounded-full"
                        />
                        {eyebrow}
                    </p>
                )}

                <h1
                    className={`text-h2 text-pen-primary leading-[1.1] font-black text-balance ${
                        eyebrow ? "mt-5" : ""
                    }`}
                >
                    {heading}
                </h1>
            </div>
        </section>
    );
}

export default SubPageHero;
