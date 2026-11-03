import Image, { type StaticImageData } from "next/image";

type Instrument = {
    name: string;
    logo?: StaticImageData; // logo ho to logo dikhega, warna naam
};

type Section = {
    title: string;
    subtitle?: string;
    items: Instrument[];
};

type Exchange = {
    id: string;
    code: string;
    name: string;
    gradient: string; // full class string (Tailwind dynamic string detect nahi karta)
    sections: Section[];
};

// symbols ki list se Instrument array banane ka helper
const list = (...names: string[]): Instrument[] => names.map((name) => ({ name }));

// TODO: final list NSE / BSE / MCX ki official sites se verify karo.
const exchanges: Exchange[] = [
    {
        id: "nse",
        code: "NSE",
        name: "National Stock Exchange",
        // orange -> blue
        gradient: "from-[#ff7a1a] to-[#1e6bff]",
        sections: [
            {
                title: "Index Derivatives",
                items: list(
                    "NIFTY",
                    "BANKNIFTY",
                    "FINNIFTY",
                    "MIDCPNIFTY",
                    "NIFTYNXT50",
                    "NIFTYFPI",
                ),
            },
            {
                title: "Stock Derivatives",
                items: list(
                    "RELIANCE",
                    "HDFCBANK",
                    "ICICIBANK",
                    "SBIN",
                    "TCS",
                    "INFY",
                    "BAJFINANCE",
                ),
            },
        ],
    },
    {
        id: "bse",
        code: "BSE",
        name: "Bombay Stock Exchange",
        // sky blue -> blue
        gradient: "from-[#38bdf8] to-[#1d4ed8]",
        sections: [
            {
                title: "Index Derivatives",
                items: list("SENSEX", "BANKEX"),
            },
            {
                title: "Stock Derivatives",
                items: list("SBIN", "HDFCBANK", "ICICIBANK", "AXISBANK", "TCS", "INFY"),
            },
        ],
    },
    {
        id: "mcx",
        code: "MCX",
        name: "Multi Commodity Exchange",
        // blue -> red -> blue
        gradient: "from-[#2f6bff] via-[#ef3b36] to-[#2f6bff]",
        sections: [
            {
                title: "Bullion",
                items: list("GOLD", "SILVER"),
            },
            {
                title: "Energy",
                items: list("CRUDEOIL", "NATURALGAS"),
            },
            {
                title: "Commodity Indices",
                items: list("BULLDEX", "ENERDEX"),
            },
        ],
    },
];

function InstrumentChip({ instrument }: { instrument: Instrument }) {
    return (
        <li className="border-canvas-white/15 text-small font-medium text-pen-secondary flex py-1    items-center rounded-full border px-4">
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
                <div className="text-center">
                    <h2 className="text-h2 leading-13 font-bold">
                        Choose Your Winning <br />
                        <span className="text-gradient">Instrument</span>
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {exchanges.map((exchange) => (
                        <article
                            key={exchange.id}
                            className="rounded-3 border-canvas-white/15 flex flex-col border p-6"
                        >
                            {/* Header: gradient code, neeche exchange ka naam */}
                            <header>
                                <h3
                                    className={`text-h1 w-fit bg-linear-to-r bg-clip-text font-bold text-transparent ${exchange.gradient}`}
                                >
                                    {exchange.code}
                                </h3>
                                <p className="text-body text-pen-muted mt-1">
                                    {exchange.name}
                                </p>
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

                                        <ul className="mt-4 flex flex-wrap gap-2">
                                            {section.items.map((item) => (
                                                <InstrumentChip
                                                    key={item.name}
                                                    instrument={item}
                                                />
                                            ))}
                                        </ul>
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
