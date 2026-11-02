import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, MousePointerClick, type LucideIcon } from "lucide-react";

// Screenshots / mockups milne par import karo aur neeche data mein `image:` set karo.
import optionChainImg from "@/assets/software/advancedoptionchain.png";
import spreadRatesImg from "@/assets/software/SpreadRate.png";

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    // "large" = image wala bada card (2 columns), "small" = chhota card (1 column)
    size: "large" | "small";
    image?: StaticImageData;
    icon?: LucideIcon; // chhote card ke liye
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
        icon: Activity,
        title: "Live P&L & Risk Tracking",
        description: "Real-time P&L, positions and exposure, always in front of you.",
    },
    {
        id: 3,
        size: "small",
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

function SmallCard({ card }: { card: FeatureCard }) {
    const Icon = card.icon;

    return (
        <article className="rounded-4 border-canvas-white/15 bg-canvas-white/5 flex min-h-64 flex-col justify-between border p-6 sm:p-8">
            {Icon && (
                <div className="flex-center border-primary/60 bg-primary/10 text-primary size-12 rounded-full border">
                    <Icon size={22} aria-hidden />
                </div>
            )}

            <div className="mt-8">
                <h3 className="text-large text-pen-primary font-semibold">
                    {card.title}
                </h3>
                <p className="text-body text-pen-muted mt-2 leading-relaxed">
                    {card.description}
                </p>
            </div>
        </article>
    );
}

function SoftwareAndTechnology() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-h3 text-pen-primary text-center font-bold">
                    Software Built for Serious Traders
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((card) =>
                        card.size === "large" ? (
                            <LargeCard key={card.id} card={card} />
                        ) : (
                            <SmallCard key={card.id} card={card} />
                        ),
                    )}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/terminal"
                        className="group text-body text-primary hover:text-pen-primary smooth-transition inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                    >
                        Explore our proprietary trading terminal
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

export default SoftwareAndTechnology;
