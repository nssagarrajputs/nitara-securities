const steps = [
    {
        id: 1,
        title: "Discuss your requirements",
        description:
            "Connect with our experts and share your background and funding requirements to get started with your evaluation.",
    },
    {
        id: 2,
        title: "Choose your account",
        description:
            "Select a package based on the instruments and strategies you trade, along with its rules and trading terminal platform.",
    },
    {
        id: 3,
        title: "Start placing trades",
        description:
            "Start placing orders with mentorship and community support by your side.",
    },
];

function GetStarted() {
    return (
        <section className="px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left: heading */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <h2 className="text-h2 font-bold">
                        Get Started with{" "}
                        <span className="text-gradient">Nitara Securities</span>
                    </h2>
                    <p className="text-large text-pen-muted mt-4 max-w-md leading-relaxed">
                        A straightforward process. Just three simple steps to begin your
                        trading journey.
                    </p>

                    <a
                        href="tel:+918796140949"
                        className="cta-btn-gradient rounded-2 text-body text-pen-black smooth-transition hover:bg-pen-secondary mt-8 flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold sm:w-fit"
                    >
                        Call now - +91 87961 40949
                    </a>
                </div>

                {/* Right: vertical steps */}
                <ol className="flex flex-col">
                    {steps.map((step, i) => (
                        <li key={step.id} className="flex gap-5 sm:gap-6">
                            {/* number badge + vertical connecting line */}
                            <div className="flex flex-col items-center">
                                <div className="flex-center border-primary/60 bg-primary/10 text-h4 text-primary size-14 shrink-0 rounded-full border font-semibold">
                                    {step.id}
                                </div>
                                {i < steps.length - 1 && (
                                    <div
                                        aria-hidden
                                        className="from-primary/40 my-2 w-px flex-1 bg-linear-to-b to-transparent"
                                    />
                                )}
                            </div>

                            <div className={i < steps.length - 1 ? "pb-12" : undefined}>
                                <p className="text-small text-primary font-semibold">
                                    Step {step.id}
                                </p>
                                <h3 className="text-h4 text-pen-primary mt-1 font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-body text-pen-muted mt-3 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default GetStarted;
