import Image from "next/image";
import Link from "next/link";
import brandLogoImg from "@/assets/brand-kit/ns-logo.svg";
import tpRatedBadge from "@/assets/other/rated-e-tp-footer.svg";
import socialInstagramIcon from "@/assets/social-media/insta.svg";
import socialLinkedinIcon from "@/assets/social-media/linkedin.svg";
import socialXIcon from "@/assets/social-media/x-twitter.svg";
import socialYoutubeIcon from "@/assets/social-media/youtube.svg";

const companyLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Terminal", href: "/terminal" },
    { label: "Contact", href: "/contact" },
];

const resourceLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Grievance Redressal", href: "/grievance-redressal" },
];

const socials = [
    { label: "LinkedIn", href: "#", icon: socialLinkedinIcon },
    { label: "Instagram", href: "#", icon: socialInstagramIcon },
    { label: "X (Twitter)", href: "#", icon: socialXIcon },
    { label: "YouTube", href: "#", icon: socialYoutubeIcon },
];

const headingClass = "text-body font-semibold text-pen-primary";
const linkClass =
    "text-body text-pen-muted smooth-transition hover:text-canvas-accent focus-visible:text-primary ";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden px-6 sm:px-8 lg:px-12">
            {/* soft accent glow along the top edge */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-canvas-accent)_50%,transparent)] opacity-40"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 h-40 w-2/3 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--color-canvas-accent),transparent_70%)] opacity-[0.07]"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* ---------- Main links ---------- */}
                <section className="grid grid-cols-2 gap-x-8 gap-y-12 pt-20 pb-16 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
                    <div className="col-span-2 flex flex-col items-start lg:col-span-1">
                        <Link href="/" aria-label="Nitara Securities home">
                            <Image
                                src={brandLogoImg}
                                alt="Nitara Securities logo"
                                width={180}
                            />
                        </Link>
                        <p className="text-body text-pen-secondary mt-4 max-w-xs">
                            Trade Without Limits
                        </p>
                        <Image
                            src={tpRatedBadge}
                            alt="Rated Excellent on Trustpilot"
                            className="mt-8"
                        />
                    </div>

                    <nav aria-label="Company">
                        <h4 className={headingClass}>Company</h4>
                        <ul className="mt-5 flex flex-col gap-3">
                            {companyLinks.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className={linkClass}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Resources">
                        <h4 className={headingClass}>Resources</h4>
                        <ul className="mt-5 flex flex-col gap-3">
                            {resourceLinks.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className={linkClass}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className={headingClass}>Contact</h4>
                        <ul className="mt-5 flex flex-col gap-3">
                            <li>
                                <a href="tel:+918796140949" className={linkClass}>
                                    +91 87961 40949
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@nitarasecurities.com"
                                    className={linkClass}
                                >
                                    info@nitarasecurities.com
                                </a>
                            </li>
                            <li className="text-body text-pen-secondary mt-3">
                                <p className="font-medium">Office timings</p>
                                <p className="text-pen-muted mt-1">Monday to Friday</p>
                                <p className="text-pen-muted">09:00 AM to 04:00 PM</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="h-px bg-[linear-gradient(90deg,#e9f0f500,#e9f0f5_5%,#e9f0f5e6_95%,#e9f0f500)] opacity-20" />

                {/* ---------- Copyright + socials ---------- */}
                <section className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-small">
                        <p className="text-pen-secondary">
                            © 2026 Nitara Securities. All rights reserved.
                        </p>
                        <address className="text-pen-muted mt-1 not-italic">
                            S7, Angel Mega Mall, Ghaziabad, UP 201010
                        </address>
                    </div>

                    <ul className="flex items-center gap-3">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <Link
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex-center rounded-2 border-canvas-white/15 bg-canvas-white/5 smooth-transition hover:border-canvas-accent hover:bg-canvas-accent/20 size-11 border"
                                >
                                    <Image
                                        src={s.icon}
                                        alt=""
                                        className="size-5 opacity-80"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="h-px bg-[linear-gradient(90deg,#e9f0f500,#e9f0f5_5%,#e9f0f5e6_95%,#e9f0f500)] opacity-20" />

                {/* ---------- Disclaimers ---------- */}
                <section className="text-small text-pen-muted flex flex-col gap-4 py-14 leading-relaxed">
                    <p className="text-small text-pen-secondary font-semibold">
                        Important Disclaimers
                    </p>

                    <p>
                        <strong>Information only.</strong> The content on this website is
                        provided for educational and general information purposes only. It
                        is not investment advice, a research recommendation, or an offer
                        or solicitation to buy or sell any security, derivative or
                        commodity contract.
                    </p>

                    <p>
                        <strong>High risk.</strong> Trading in Futures &amp; Options
                        (F&amp;O) and commodity derivatives involves substantial risk and
                        is not suitable for everyone. You can incur significant losses.
                        Please read our
                        <a href="/legal/risk-disclosure">Risk Disclosure</a> before
                        applying.
                    </p>

                    <p>
                        <strong>Buying power and leverage.</strong> Buying power of up to
                        30X allows a trader to take a much larger position than the
                        capital involved. This can magnify profits as well as losses. A
                        small market move can lead to a large change in account value.
                    </p>

                    <p>
                        <strong>No guarantee.</strong> Nitara Securities does not
                        guarantee any profit, return or payout. Past performance does not
                        indicate future results, and outcomes differ from trader to
                        trader.
                    </p>

                    <p>
                        <strong>Account rules apply.</strong> Every funded account is
                        subject to a daily loss limit, a maximum drawdown limit and other
                        trading rules. If a limit is breached, the account may be closed.
                        Packages, fees and conditions are governed by the Funding
                        Agreement and the Trading Rules &amp; Risk Policy.
                    </p>

                    <p>
                        <strong>Funding and deposit.</strong> A security deposit may be
                        required to access a funded account. Terms related to the deposit,
                        profit sharing, payouts and refunds are set out in the Funding
                        Agreement and the Refund Policy. Please read them carefully before
                        making any payment.
                    </p>

                    <p>
                        <strong>Nature of our business.</strong> Nitara Securities
                        operates as a proprietary trading firm. The information on this
                        website does not create an advisory, brokerage or fiduciary
                        relationship between you and Nitara Securities.
                    </p>

                    <p>
                        <strong>Testimonials and statistics.</strong> Testimonials and
                        statistics shown on this website may not represent the experience
                        of every trader and do not guarantee future performance or
                        success.
                    </p>

                    <p>
                        <strong>Market data and third-party content.</strong> Market data
                        shown on this website is delayed and is for information only. It
                        is provided by third parties, and Nitara Securities does not
                        warrant its accuracy or completeness. Third-party links are
                        provided for convenience only.
                    </p>

                    <p>
                        <strong>Eligibility and local laws.</strong> This website is
                        intended for users who are at least 18 years of age and who are
                        legally permitted to trade. Account approval is subject to
                        verification (KYC) and compliance with applicable laws. It is your
                        responsibility to ensure that your use of this website does not
                        violate any local law or regulation. Nitara Securities is not
                        liable for any loss arising from reliance on the information
                        provided on this website.
                    </p>
                </section>
            </div>
        </footer>
    );
}
