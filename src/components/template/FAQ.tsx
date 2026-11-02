"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export type FaqItem = {
    id: string | number;
    question: string;
    answer: string;
};

type FAQProps = {
    items: FaqItem[];
};

export default function FAQ({ items }: FAQProps) {
    // sirf ek id store hoti hai => ek time par ek hi open, default mein koi nahi
    const [openId, setOpenId] = useState<FaqItem["id"] | null>(null);
    const baseId = useId();

    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-h3 text-pen-primary text-center font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="mt-12">
                    {items.map((item) => {
                        const isOpen = openId === item.id;
                        const buttonId = `${baseId}-q-${item.id}`;
                        const panelId = `${baseId}-a-${item.id}`;

                        return (
                            <div key={item.id} className="border-canvas-white/5 border-b">
                                <button
                                    id={buttonId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    className="flex-between group w-full cursor-pointer gap-6 px-6 py-5 text-left"
                                >
                                    <span className="text-large text-pen-primary group-hover:text-primary smooth-transition font-medium">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        size={22}
                                        aria-hidden
                                        className={`text-pen-muted shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {/* grid-rows trick: 0fr -> 1fr se smooth height animation */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    inert={!isOpen}
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                                        isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-body text-pen-muted px-6 pb-6 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-h4 text-pen-primary font-semibold">
                        Still Have Questions?
                    </h3>
                    <p className="text-body text-pen-muted mx-auto mt-3 max-w-xl leading-relaxed">
                        Our team is here to help. Reach out and we&apos;ll be happy to
                        answer any additional questions you may have.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-2 bg-warning/20 border-canvas-white/30 text-body text-pen-primary smooth-transition hover:border-canvas-white/60 hover:bg-canvas-white/5 mt-8 inline-flex items-center justify-center border px-6 py-3 font-semibold"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
