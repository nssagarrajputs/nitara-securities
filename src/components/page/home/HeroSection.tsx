import SplashCursor from "../../SplashCursor";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import Link from "next/link";

function HeroSection() {
    return (
        <section className="w-full px-4">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center">
                <DotPattern
                    className={cn(
                        "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
                    )}
                />
                {/* <SplashCursor
                    SIM_RESOLUTION={128}
                    DYE_RESOLUTION={1440}
                    DENSITY_DISSIPATION={3.5}
                    VELOCITY_DISSIPATION={2}
                    PRESSURE={0.1}
                    CURL={3}
                    SPLAT_RADIUS={0.2}
                    SPLAT_FORCE={6000}
                    COLOR_UPDATE_SPEED={10}
                /> */}

                <div className="text-twilight relative my-28 max-w-3xl bg-white/50">
                    {/* Eyebrow */}
                    <p className="text-pacific border-pacific mb-6 w-fit rounded-full border p-1 px-4 text-sm tracking-wide sm:mx-auto">
                        ✨ Proprietary Trading Desk
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-5xl leading-tight font-semibold sm:text-center">
                        A Structured Trading Environment <br />
                        for Disciplined Traders
                    </h1>

                    {/* Supporting Text */}
                    <p className="my-8 max-w-2xl leading-relaxed sm:mx-auto sm:max-w-xl sm:text-center">
                        Nitara Securities operates a professional proprietary
                        trading desk focused on risk management, process-driven
                        execution, and capital discipline for serious market
                        participants.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col justify-center gap-4 text-center font-medium *:rounded *:px-8 *:py-4 *:hover:underline sm:flex-row">
                        <Link
                            href="/apply"
                            className="bg-pacific hover:bg-pacific-500 block text-white transition-colors"
                        >
                            Apply as Trader
                        </Link>

                        <Link
                            href="/how-it-works"
                            className="text-pacific hover:text-twilight bg-pacific-50/50 block"
                        >
                            How to work →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
