import Image, { type StaticImageData } from "next/image";

import { Activity, MousePointerClick, type LucideIcon } from "lucide-react";

// Screenshots / mockups milne par import karo aur neeche data mein `image:` set karo.
import optionChainImg from "@/assets/software/advancedoptionchain.png";
import spreadRatesImg from "@/assets/software/SpreadRate.png";

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    size: "large" | "small";
    image?: StaticImageData;
    icon?: LucideIcon;
    accent?: "primary" | "secondary"; // small card ka colour
};

// Order important hai: bento rows (2+1, 1+2) isi order se bante hain.
const features: FeatureCard[] = [
    {
        id: 1,
        size: "large",
        title: "Advanced Option Chain with IV & Greeks",
        description:
            "Live option chain with implied volatility and all the Greeks, so you can read the market at a glance.",
        image: optionChainImg,
    },
    {
        id: 2,
        size: "small",
        accent: "primary",
        icon: Activity,
        title: "Live P&L & Risk Tracking",
        description: "Real-time P&L, positions and exposure, always in front of you.",
    },
    {
        id: 3,
        size: "small",
        accent: "secondary",
        icon: MousePointerClick,
        title: "One-Click Basket Orders",
        description: "Place all legs of a strategy together in a single click.",
    },
    {
        id: 4,
        size: "large",
        title: "Spread Rates Across Every Strike & Expiry",
        description: "See spread rates across every strike and every gap, in one view.",
        image: spreadRatesImg,
    },
];

function LargeCard({ card }: { card: FeatureCard }) {
    return (
        <article className="rounded-4 border-canvas-white/15 relative flex min-h-80 flex-col justify-end overflow-hidden border md:col-span-2 md:min-h-96">
            {/* background: image ya placeholder gradient */}
            {card.image ? (
                <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover object-top"
                />
            ) : (
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary),transparent_60%)] opacity-25"
                />
            )}

            {/* neeche se fade to transparent */}
            <div
                aria-hidden
                className="from-canvas via-canvas/70 absolute inset-0 bg-linear-to-t to-transparent"
            />

            <div className="relative z-10 p-6 pt-40 sm:p-8">
                <h3 className="text-h4 text-pen-primary font-semibold">{card.title}</h3>
                <p className="text-body text-pen-secondary mt-2 max-w-md leading-relaxed">
                    {card.description}
                </p>
            </div>
        </article>
    );
}

const smallAccent = {
    primary: {
        card: "border-primary/50 from-primary/30",
        icon: "border-primary/60 bg-primary/10 text-primary",
        title: "text-primary",
    },
    secondary: {
        card: "border-secondary/50 from-secondary/30",
        icon: "border-secondary/60 bg-secondary/10 text-secondary",
        title: "text-secondary",
    },
};

function SmallCard({ card }: { card: FeatureCard }) {
    const Icon = card.icon;
    const accent = smallAccent[card.accent ?? "primary"];

    return (
        <article
            className={`rounded-4 flex min-h-64 flex-col justify-between border bg-linear-to-b to-transparent to-90% p-6 sm:p-8 ${accent.card}`}
        >
            {Icon && (
                <div className={`flex-center size-12 rounded-full border ${accent.icon}`}>
                    <Icon size={22} aria-hidden />
                </div>
            )}

            <div className="mt-8">
                <h3 className={`text-h2 font-semibold ${accent.title}`}>{card.title}</h3>
                {/* <p className="text-body text-pen-muted mt-2 leading-relaxed">
                    {card.description}
                </p> */}
            </div>
        </article>
    );
}

function SoftwareAndTechnology() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-h3 text-pen-primary text-center font-bold">
                    <br />
                </h2>
                <div className="text-center">
                    <h2 className="text-h2 leading-13 font-bold">
                        Feature-Packed Trading{" "}
                        <span className="text-gradient">Ecosystem</span>
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((card) =>
                        card.size === "large" ? (
                            <LargeCard key={card.id} card={card} />
                        ) : (
                            <SmallCard key={card.id} card={card} />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default SoftwareAndTechnology;
