"use client";

import { useState } from "react";

const LEVERAGE = 30;
const MIN_MARGIN = 1_00_000; // 1 Lakh
const MAX_MARGIN = 10_00_000; // 10 Lakh
const STEP = 1_00_000;
const MAX_INPUT = 10_00_00_000; // typed value cap: 10 Crore

const inr = new Intl.NumberFormat("en-IN");

const trim = (n: number) => parseFloat(n.toFixed(2)).toString();

function toWords(n: number) {
    if (n >= 1_00_00_000) return `₹${trim(n / 1_00_00_000)} Crore`;
    if (n >= 1_00_000) return `₹${trim(n / 1_00_000)} Lakh`;
    return `₹${inr.format(n)}`;
}

const ticks = Array.from(
    { length: (MAX_MARGIN - MIN_MARGIN) / STEP + 1 },
    (_, i) => `${i + 1}L`,
);

function HowItWorks() {
    const [margin, setMargin] = useState(MIN_MARGIN * 5);

    const exposure = margin * LEVERAGE;

    // slider sirf 1L–10L dikhata hai, input us se bahar bhi ja sakta hai
    const sliderValue = Math.min(Math.max(margin, MIN_MARGIN), MAX_MARGIN);
    const progress = ((sliderValue - MIN_MARGIN) / (MAX_MARGIN - MIN_MARGIN)) * 100;

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const digits = e.target.value.replace(/\D/g, "");
        const value = digits ? Number(digits) : 0;
        setMargin(Math.min(value, MAX_INPUT));
    }

    return (
        <section className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-h2 font-bold">
                        How it <span className="text-gradient">works</span>
                    </h2>
                    <p className="text-large text-pen-muted mx-auto mt-3 max-w-xl">
                        Pick your margin and see the buying power you get with up to{" "}
                        {LEVERAGE}X leverage.
                    </p>
                </div>

                {/* Calculator */}
                <div className="border-pen-white/15 bg-pen-white/5 rounded-4 mt-12 border p-6 sm:p-10">
                    {/* Margin */}
                    <p className="text-pen-secondary text-large font-medium">
                        A margin of
                    </p>

                    <label className="border-pen-white/20 focus-within:border-primary smooth-transition rounded-3 mt-3 flex items-center gap-2 border px-4 py-3">
                        <span className="text-h3 text-pen-muted font-semibold">₹</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            aria-label="Margin amount in rupees"
                            value={margin ? inr.format(margin) : ""}
                            onChange={handleInput}
                            placeholder="0"
                            className="text-h3 w-full bg-transparent font-semibold outline-none focus-visible:outline-none"
                        />
                    </label>
                    <p className="text-small text-pen-muted mt-2">
                        {margin ? toWords(margin) : "Enter an amount"}
                    </p>

                    {/* Slider */}
                    <div className="mt-6">
                        <input
                            type="range"
                            aria-label="Select margin"
                            min={MIN_MARGIN}
                            max={MAX_MARGIN}
                            step={STEP}
                            value={sliderValue}
                            onChange={(e) => setMargin(Number(e.target.value))}
                            style={{
                                background: `linear-gradient(to right, var(--color-primary) ${progress}%, rgba(255,255,255,0.15) ${progress}%)`,
                            }}
                            className="[&::-moz-range-thumb]:bg-primary [&::-webkit-slider-thumb]:bg-primary h-2 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
                        />
                        <div className="text-xsmall text-pen-muted mt-3 flex justify-between">
                            {ticks.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Divider with leverage badge */}
                    <div className="my-8 flex items-center gap-4">
                        <div className="bg-pen-white/15 h-px flex-1" />
                        <span className="bg-secondary text-pen-black text-small rounded-full px-4 py-1 font-bold">
                           ~ {LEVERAGE}X
                        </span>
                        <div className="bg-pen-white/15 h-px flex-1" />
                    </div>

                    {/* Exposure */}
                    <p className="text-pen-secondary text-large font-medium">
                        will give an exposure of upto ~
                    </p>

                    <div className="border-canvas-accent/40 bg-canvas-accent/10 rounded-3 mt-3 flex items-center gap-2 border px-4 py-3">
                        <span className="text-h3 text-canvas-accent font-semibold">
                            ₹
                        </span>
                        <input
                            type="text"
                            readOnly
                            aria-label="Exposure amount in rupees"
                            value={exposure ? inr.format(exposure) : "0"}
                            className="text-h3 text-canvas-accent w-full bg-transparent font-bold outline-none"
                        />
                    </div>
                    <p className="text-small text-pen-muted mt-2">
                        {exposure ? toWords(exposure) : ""}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
