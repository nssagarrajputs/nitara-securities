import { Phone } from "lucide-react";

// Content yahin se badlo
const mainStat = {
    value: "₹200,00,00,000 +",
    label: "Capital regulated between our traders",
};

const stats = [
    { id: 1, value: "14+", label: "Years of experience" },
    { id: 2, value: "80+", label: "Certified traders" },
    { id: 3, value: "95%", label: "Success rate" },
];

function Statistics() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-h3 text-pen-primary text-center font-bold">
                    Numbers That Speak for Themselves
                </h2>

                {/* Main stat */}
                <div className="mt-16 text-center">
                    <p className="text-d1 from-primary to-canvas-accent bg-linear-to-r bg-clip-text leading-tight font-black text-transparent">
                        {mainStat.value}
                    </p>
                    <p className="text-large text-pen-secondary mt-2">{mainStat.label}</p>
                </div>

                {/* Three stats */}
                <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="rounded-4 border-canvas-white/15 bg-canvas-white/5 flex flex-col-reverse items-center border px-6 py-10 text-center"
                        >
                            <dt className="text-body text-pen-muted mt-2">
                                {stat.label}
                            </dt>
                            <dd className="text-h2 text-pen-primary font-bold">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>

                {/* Notes */}
                <div className="mx-auto mt-12 max-w-2xl text-center">
                    <p className="text-body text-pen-secondary leading-relaxed">
                        Built on a foundation of performance, trust, and continuous growth
                        in the stock market.
                    </p>
                    <p className="text-body text-pen-muted mt-3 leading-relaxed">
                        Join a growing community of traders who trust Nitara Securities
                        with their careers.
                    </p>
                </div>

                {/* Call now */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="tel:+918796140949"
                        className="bg-canvas-white rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary flex items-center gap-2 px-6 py-3 font-semibold"
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
