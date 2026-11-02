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
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-h3 text-pen-primary font-bold">
                        Get Started with Nitara Securities
                    </h2>
                    <p className="text-large text-pen-secondary mt-4 leading-relaxed">
                        A straightforward process. Just three simple steps to begin your
                        trading journey.
                    </p>
                </div>

                <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                    {steps.map((step) => (
                        <li key={step.id}>
                            {/* number badge + connecting line (sirf md se, last step par nahi) */}
                            <div className="flex items-center gap-4">
                                <div className="flex-center border-primary/60 bg-primary/10 text-h4 text-primary size-14 shrink-0 rounded-full border font-semibold">
                                    {step.id}
                                </div>

                                <div
                                    aria-hidden
                                    className="from-primary/40 hidden h-px flex-1 bg-linear-to-r to-transparent md:block"
                                />
                            </div>

                            <p className="text-small text-primary mt-6 font-semibold">
                                Step {step.id}
                            </p>
                            <h3 className="text-h4 text-pen-primary mt-1 font-semibold">
                                {step.title}
                            </h3>
                            <p className="text-body text-pen-muted mt-3 leading-relaxed">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default GetStarted;
