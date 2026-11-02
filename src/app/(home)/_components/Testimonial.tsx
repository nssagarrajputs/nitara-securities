"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type TestimonialItem = {
    id: number;
    quote: string;
    rating: number; // 1 - 5
    name: string;
};

// TODO: placeholder content hai. Sirf asli traders ke reviews (unki permission ke saath) lagana.
const testimonials: TestimonialItem[] = [
    {
        id: 1,
        quote: "Placeholder: the evaluation process was clear and straightforward from day one.",
        rating: 5,
        name: "Trader Name",
    },
    {
        id: 2,
        quote: "Placeholder: the trading terminal is fast and easy to use.",
        rating: 5,
        name: "Trader Name",
    },
    {
        id: 3,
        quote: "Placeholder: the team was always available to answer my questions.",
        rating: 4,
        name: "Trader Name",
    },
    {
        id: 4,
        quote: "Placeholder: mentorship and the community helped me stay disciplined.",
        rating: 5,
        name: "Trader Name",
    },
    {
        id: 5,
        quote: "Placeholder: choosing the right account for my strategy was simple.",
        rating: 5,
        name: "Trader Name",
    },
    {
        id: 6,
        quote: "Placeholder: support through the whole journey made a real difference.",
        rating: 4,
        name: "Trader Name",
    },
];

function Stars({ rating }: { rating: number }) {
    return (
        <div
            role="img"
            aria-label={`${rating} out of 5 stars`}
            className="flex items-center gap-1"
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    aria-hidden
                    className={
                        i < rating ? "text-secondary fill-current" : "text-pen-muted/40"
                    }
                />
            ))}
        </div>
    );
}

function Testimonial() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateEdges = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        updateEdges();
        window.addEventListener("resize", updateEdges);
        return () => window.removeEventListener("resize", updateEdges);
    }, [updateEdges]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = trackRef.current;
        if (!el || el.children.length < 2) return;
        const first = el.children[0] as HTMLElement;
        const second = el.children[1] as HTMLElement;
        const step = second.offsetLeft - first.offsetLeft; // card width + gap
        el.scrollBy({ left: step * direction, behavior: "smooth" });
    };

    const navBtn =
        "flex-center size-12 shrink-0 cursor-pointer rounded-full border border-canvas-white/20 text-pen-primary smooth-transition hover:border-primary hover:bg-canvas-white/5 disabled:pointer-events-none disabled:opacity-30";

    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <h2 className="text-h3 text-pen-primary max-w-2xl text-left font-bold">
                        Real experiences from traders who have built successful careers at
                        Nitara Securities.
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous testimonials"
                            onClick={() => scrollByCard(-1)}
                            disabled={!canPrev}
                            className={navBtn}
                        >
                            <ChevronLeft size={22} aria-hidden />
                        </button>
                        <button
                            type="button"
                            aria-label="Next testimonials"
                            onClick={() => scrollByCard(1)}
                            disabled={!canNext}
                            className={navBtn}
                        >
                            <ChevronRight size={22} aria-hidden />
                        </button>
                    </div>
                </div>

                {/* mobile 1.2 cards, tablet 2.5 cards, desktop 4.5 cards visible */}
                <div
                    ref={trackRef}
                    onScroll={updateEdges}
                    role="region"
                    aria-label="Testimonials"
                    tabIndex={0}
                    className="mt-12 flex snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((t) => (
                        <figure
                            key={t.id}
                            className="rounded-4 border-canvas-white/15 bg-canvas-white/5 flex shrink-0 basis-[calc((100%-1.5rem)/1.2)] snap-start flex-col border p-6 sm:basis-[calc((100%-3rem)/2.5)] lg:basis-[calc((100%-6rem)/4.5)]"
                        >
                            <blockquote className="text-body text-pen-secondary flex-1 leading-relaxed">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="mt-6">
                                <Stars rating={t.rating} />
                            </div>
                            <figcaption className="text-body text-pen-primary mt-3 font-semibold">
                                {t.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
