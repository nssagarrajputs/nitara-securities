import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Images (payoff diagram / screenshot) milne par import karo aur data mein `image:` set karo.
// import straddleImg from "@/assets/strategies/straddle.png";
// import ratioSpreadImg from "@/assets/strategies/ratio-spread.png";

type Strategy = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    href: string;
    image?: StaticImageData;
};

// Naya strategy jodna ho to bas ek object add karo.
const strategies: Strategy[] = [
    {
        id: "straddle",
        title: "Straddle",
        subtitle: "Volatility strategy",
        description:
            "A straddle combines a call and a put at the same strike and expiry. A long straddle aims to benefit from a big move in either direction, while a short straddle looks to benefit when the market stays range-bound.",
        href: "/strategies/straddle",
        // image: straddleImg,
    },
    {
        id: "ratio-spread",
        title: "Ratio Spread",
        subtitle: "Spread strategy",
        description:
            "A ratio spread buys and sells options of the same type at different strikes in an unequal ratio, such as 1:2. It can lower the upfront cost of a trade, but the risk can grow if the market moves sharply against the position.",
        href: "/strategies/ratio-spread",
        // image: ratioSpreadImg,
    },
];

function StrategyCard({ strategy }: { strategy: Strategy }) {
    return (
        <article className="rounded-4 border-canvas-white/15 bg-canvas-white/5 grid grid-cols-1 gap-6 border p-3 md:grid-cols-5 md:p-4">
            {/* Left: image */}
            <div className="rounded-3 relative min-h-56 overflow-hidden md:col-span-2 md:min-h-72">
                {strategy.image ? (
                    <Image
                        src={strategy.image}
                        alt={`${strategy.title} strategy`}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-primary),transparent_70%)] opacity-30"
                    />
                )}
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center px-3 pb-3 md:col-span-3 md:p-6">
                <h3 className="text-h3 text-pen-primary font-bold">{strategy.title}</h3>
                {strategy.subtitle && (
                    <p className="text-body text-primary mt-1 font-medium">
                        {strategy.subtitle}
                    </p>
                )}
                <p className="text-body text-pen-muted mt-4 leading-relaxed">
                    {strategy.description}
                </p>

                <Link
                    href={strategy.href}
                    className="group text-body text-pen-primary hover:text-primary smooth-transition mt-6 inline-flex w-fit items-center gap-2 font-semibold"
                >
                    Read more
                    <ArrowRight
                        size={20}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </article>
    );
}

function Strategies() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-h3 text-pen-primary max-w-2xl text-left font-bold">
                    Strategies We Work On
                </h2>

                <div className="mt-12 flex flex-col gap-6">
                    {strategies.map((strategy) => (
                        <StrategyCard key={strategy.id} strategy={strategy} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Strategies;
