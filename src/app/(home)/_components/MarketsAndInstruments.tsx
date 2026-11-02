import Image, { type StaticImageData } from "next/image";

// Logos milne par yahan import karo, aur neeche data mein `logo:` uncomment karo.
// import nifty50Logo from "@/assets/indices/nifty50.svg";
// import sensexLogo from "@/assets/indices/sensex.svg";

type Instrument = {
    name: string;
    logo?: StaticImageData; // logo ho to logo dikhega, warna naam
    note?: string; // optional chhoti explanation (jaise BULLDEX ke liye)
};

type Group = {
    label?: string; // jaise "Gold", "IT Sector"
    items: Instrument[];
};

type Section = {
    title: string;
    subtitle?: string;
    groups: Group[];
};

type Exchange = {
    id: string;
    code: string;
    name: string;
    segment: string;
    accent: string; // full class name (Tailwind dynamic string detect nahi karta)
    sections: Section[];
};

// TODO: final list NSE / BSE / MCX ki official sites se verify karo.
const exchanges: Exchange[] = [
    {
        id: "nse",
        code: "NSE",
        name: "National Stock Exchange",
        segment: "Futures & Options",
        accent: "text-primary",
        sections: [
            {
                title: "Index Derivatives",
                subtitle: "Major market benchmarks",
                groups: [
                    {
                        items: [
                            { name: "Nifty 50" /* , logo: nifty50Logo */ },
                            { name: "Bank Nifty" },
                            { name: "FinNifty" },
                            { name: "Midcap Nifty" },
                            { name: "Nifty Next 50" },
                        ],
                    },
                ],
            },
            {
                title: "Stock Derivatives",
                subtitle: "Top 200+ large-cap stocks",
                groups: [
                    {
                        label: "Banking & Financial",
                        items: [
                            { name: "HDFCBANK" },
                            { name: "ICICIBANK" },
                            { name: "SBIN" },
                        ],
                    },
                    {
                        label: "IT Sector",
                        items: [{ name: "TCS" }, { name: "INFY" }, { name: "WIPRO" }],
                    },
                    {
                        label: "Energy & Heavy Industry",
                        items: [
                            { name: "RELIANCE" },
                            { name: "TATASTEEL" },
                            { name: "L&T" },
                        ],
                    },
                    {
                        label: "Automobiles & Consumer Goods",
                        items: [{ name: "TATAMOTORS" }, { name: "MARUTI" }],
                    },
                ],
            },
        ],
    },
    {
        id: "bse",
        code: "BSE",
        name: "Bombay Stock Exchange",
        segment: "Futures & Options",
        accent: "text-primary",
        sections: [
            {
                title: "Index Derivatives",
                subtitle: "Flagship BSE indices",
                groups: [
                    {
                        items: [
                            { name: "Sensex" /* , logo: sensexLogo */ },
                            { name: "Bankex" },
                        ],
                    },
                ],
            },
            {
                title: "Stock Derivatives",
                groups: [{ items: [{ name: "Stock Derivatives" }] }],
            },
        ],
    },
    {
        id: "mcx",
        code: "MCX",
        name: "Multi Commodity Exchange",
        segment: "Commodities",
        accent: "text-secondary",
        sections: [
            {
                title: "Bullion",
                subtitle: "Precious metals",
                groups: [
                    {
                        label: "Gold",
                        items: [
                            { name: "Gold" },
                            { name: "Gold Mini" },
                            // { name: "Gold Guinea" },
                            // { name: "Gold Petal" },
                        ],
                    },
                    {
                        label: "Silver",
                        items: [
                            { name: "Silver" },
                            { name: "Silver Mini" },
                            // { name: "Silver Micro" },
                        ],
                    },
                ],
            },
            {
                title: "Energy",
                groups: [
                    {
                        label: "Crude Oil",
                        items: [{ name: "Crude Oil" }, { name: "Crude Oil Mini" }],
                    },
                ],
            },
            {
                title: "Commodity Indices",
                subtitle: "Sector-wise baskets",
                groups: [
                    {
                        items: [
                            { name: "BULLDEX", note: "Gold + Silver combined index" },
                            {
                                name: "ENERDEX",
                                note: "Crude Oil + Natural Gas index",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function InstrumentChip({ instrument }: { instrument: Instrument }) {
    if (instrument.note) {
        return (
            <li className="border-canvas-white/15 rounded-3 flex w-full flex-col border px-4 py-2">
                <span className="text-small text-pen-secondary font-medium">
                    {instrument.name}
                </span>
                <span className="text-xsmall text-pen-muted">{instrument.note}</span>
            </li>
        );
    }

    return (
        <li className="border-canvas-white/15 text-small text-pen-secondary flex h-10 items-center rounded-full border px-4">
            {instrument.logo ? (
                <Image
                    src={instrument.logo}
                    alt={instrument.name}
                    className="h-5 w-auto"
                />
            ) : (
                instrument.name
            )}
        </li>
    );
}

function MarketsAndInstruments() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-h3 text-pen-primary text-center font-bold">
                    Markets You Can Trade
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {exchanges.map((exchange) => (
                        <article
                            key={exchange.id}
                            className="rounded-4 border-canvas-white/15 bg-canvas-white/5 flex flex-col border p-6"
                        >
                            <header className="flex items-start justify-between gap-4">
                                <div>
                                    <h3
                                        className={`text-h3 font-bold ${exchange.accent}`}
                                    >
                                        {exchange.code}
                                    </h3>
                                    <p className="text-small text-pen-muted mt-1">
                                        {exchange.name}
                                    </p>
                                </div>
                                <span className="border-canvas-white/15 text-xsmall text-pen-secondary shrink-0 rounded-full border px-3 py-1">
                                    {exchange.segment}
                                </span>
                            </header>

                            <div className="mt-6 flex flex-col gap-6">
                                {exchange.sections.map((section) => (
                                    <div
                                        key={section.title}
                                        className="border-canvas-white/15 border-t pt-6"
                                    >
                                        <p className="text-large text-pen-primary font-semibold">
                                            {section.title}
                                        </p>
                                        {section.subtitle && (
                                            <p className="text-small text-pen-muted mt-1">
                                                {section.subtitle}
                                            </p>
                                        )}

                                        <div className="mt-4 flex flex-col gap-4">
                                            {section.groups.map((group, i) => (
                                                <div key={group.label ?? i}>
                                                    {group.label && (
                                                        <p className="text-small text-pen-secondary mb-2 font-medium">
                                                            {group.label}
                                                        </p>
                                                    )}
                                                    <ul className="flex flex-wrap gap-2">
                                                        {group.items.map((item) => (
                                                            <InstrumentChip
                                                                key={item.name}
                                                                instrument={item}
                                                            />
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MarketsAndInstruments;
