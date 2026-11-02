import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    type LucideIcon,
} from "lucide-react";

type Way = {
    id: string;
    title: string;
    value: string;
    description: string;
    href: string;
    external?: boolean;
    icon: LucideIcon;
    primary?: boolean;
    // Tailwind full class names (dynamic strings detect nahi hoti)
    card: string;
    iconBox: string;
};

const ADDRESS = "S7, Angel Mega Mall, Ghaziabad, UP 201010";

const ways: Way[] = [
    {
        id: "call",
        title: "Call us",
        value: "+91 87961 40949",
        description: "Monday to Friday, 09:00 AM to 04:00 PM",
        href: "tel:+918796140949",
        icon: Phone,
        primary: true,
        // primary: gradient zyada gehra + border mazboot + glow
        card: "border-secondary/60 from-secondary/30 hover:border-secondary hover:from-secondary/40 shadow-[0_0_48px_-16px_var(--color-secondary)]",
        iconBox: "border-secondary/50 bg-secondary/20 text-secondary",
    },
    {
        id: "whatsapp",
        title: "WhatsApp",
        value: "+91 87961 40949",
        description: "Send us a message anytime",
        href: "https://wa.me/918796140949",
        external: true,
        icon: MessageCircle,
        card: "border-canvas-accent/30 from-canvas-accent/15 hover:border-canvas-accent/60 hover:from-canvas-accent/25",
        iconBox: "border-canvas-accent/40 bg-canvas-accent/15 text-canvas-accent",
    },
    {
        id: "email",
        title: "Email us",
        value: "info@nitarasecurities.com",
        description: "Write to us with any questions",
        href: "mailto:info@nitarasecurities.com",
        icon: Mail,
        card: "border-info/30 from-info/15 hover:border-info/60 hover:from-info/25",
        iconBox: "border-info/40 bg-info/15 text-info",
    },
    {
        id: "address",
        title: "Visit us",
        value: ADDRESS,
        description: "Open in Google Maps",
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
        external: true,
        icon: MapPin,
        card: "border-error/30 from-error/15 hover:border-error/60 hover:from-error/25",
        iconBox: "border-error/40 bg-error/15 text-error",
    },
];

function WayToConnect() {
    return (
        <section className="px-6 py-16 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2">
                {ways.map((way) => {
                    const Icon = way.icon;

                    return (
                        <a
                            key={way.id}
                            href={way.href}
                            {...(way.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            className={`group rounded-4 relative flex min-h-56 flex-col justify-between border bg-linear-to-br to-transparent p-6 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] sm:p-8 ${way.card}`}
                        >
                            <div className="flex items-start justify-between">
                                <div
                                    className={`flex-center size-14 rounded-full border ${way.iconBox}`}
                                >
                                    <Icon size={26} aria-hidden />
                                </div>

                                {way.primary ? (
                                    <span className="border-secondary/40 text-xsmall text-secondary rounded-full border px-3 py-1 font-semibold">
                                        Preferred
                                    </span>
                                ) : (
                                    <ArrowUpRight
                                        size={22}
                                        aria-hidden
                                        className="text-pen-muted group-hover:text-pen-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                )}
                            </div>

                            <div className="mt-10">
                                <h3 className="text-h4 text-pen-primary font-semibold">
                                    {way.title}
                                </h3>
                                <p
                                    className={`text-pen-primary mt-2 font-medium wrap-break-word ${
                                        way.primary ? "text-large" : "text-body"
                                    }`}
                                >
                                    {way.value}
                                </p>
                                <p className="text-small text-pen-muted mt-1">
                                    {way.description}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default WayToConnect;
