import Image from "next/image";
import { Phone } from "lucide-react";
import nsIconImage from "@/assets/brand-kit/ns-icon.svg";

// Content yahin se badlo
const mainStat = {
    value: "₹200,00,00,000 +",
    label: "Funds circulated between traders",
};

const stats = [
    { id: 1, value: "14+", label: "Years of experience" },
    { id: 2, value: "80+", label: "Certified traders" },
];

function Statistics() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
            {/* dotted grid background: beech mein dikhta hai, kinaron par fade */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[24px_24px]"
            />

            {/* green accent glow: center se */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-160 w-160 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--color-canvas-accent),transparent_70%)] opacity-[0.15]"
            />
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-h2 font-bold">
                        Driven by Experience. <br />
                        Backed by Capital.
                    </h2>
                </div>

                {/* Main stat */}
                <div className="mt-16 text-center">
                    <p className="text-d1 from-primary to-canvas-accent bg-linear-to-r bg-clip-text leading-tight font-black text-transparent">
                        {mainStat.value}
                    </p>
                    <p className="text-large text-pen-secondary mt-2">{mainStat.label}</p>
                </div>

                <div className="mt-16 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
                    <dl className="flex flex-col-reverse items-center px-6 py-10 text-center">
                        <dt className="text-body text-pen-muted mt-2">
                            {stats[0].label}
                        </dt>
                        <dd className="text-d1 text-pen-primary font-bold">
                            {stats[0].value}
                        </dd>
                    </dl>

                    <Image
                        src={nsIconImage}
                        alt=""
                        aria-hidden
                        className="mx-auto h-20 w-auto sm:h-50"
                    />

                    <dl className="flex flex-col-reverse items-center px-6 py-10 text-center">
                        <dt className="text-body text-pen-muted mt-2">
                            {stats[1].label}
                        </dt>
                        <dd className="text-d1 text-pen-primary font-bold">
                            {stats[1].value}
                        </dd>
                    </dl>
                </div>

                {/* Notes */}
                <div className="mx-auto mt-12 max-w-3xl text-center">
                    <p className="text-large text-pen-secondary leading-relaxed">
                        Built on a foundation of performance, trust, and continuous growth
                        in the stock market.
                    </p>
                    <p className="text-large text-pen-muted mt-3 leading-relaxed">
                        Join a growing community of traders who trust Nitara Securities
                        with their careers.
                    </p>
                </div>

                {/* Call now */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="tel:+918796140949"
                        className="cta-btn-gradient rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary flex items-center gap-2 px-6 py-3 font-semibold"
                    >
                        <Phone size={20} strokeWidth={2} aria-hidden />
                        Call now - +91 87961 40949
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Statistics;
