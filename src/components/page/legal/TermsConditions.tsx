"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsConditions() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="from-twilight-900 via-twilight-800 to-pacific-900 relative overflow-hidden bg-gradient-to-br px-4 pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="border-pacific-400/30 bg-pacific-500/10 text-pacific-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                            <FileText size={16} />
                            <span>Legal</span>
                        </div>
                        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Terms & Conditions
                        </h1>
                        <p className="text-twilight-200 text-lg">
                            Last Updated: February 14, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="px-4 py-16 lg:py-24">
                <div className="prose prose-lg prose-twilight mx-auto max-w-4xl">
                    <div className="border-twilight-100 rounded-2xl border-2 bg-white p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="lead text-twilight-700">
                                Welcome to Nitara Securities. These Terms and
                                Conditions ("Terms") govern your access to and
                                use of our website, services, and any related
                                content. By accessing or using our services, you
                                agree to be bound by these Terms. If you do not
                                agree with these Terms, please do not use our
                                services.
                            </p>
                        </div>

                        {/* 1. Acceptance of Terms */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                By accessing or using the Nitara Securities
                                website and services, you confirm that:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>You are at least 18 years of age</li>
                                <li>
                                    You have the legal capacity to enter into
                                    binding agreements
                                </li>
                                <li>
                                    You agree to comply with all applicable laws
                                    and regulations
                                </li>
                                <li>
                                    You accept and agree to be bound by these
                                    Terms and our Privacy Policy
                                </li>
                            </ul>
                        </section>

                        {/* 2. Services Overview */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                2. Services Overview
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                Nitara Securities operates as a proprietary
                                trading desk. Our services include:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Providing capital to approved traders for
                                    trading activities
                                </li>
                                <li>
                                    Offering proprietary trading platforms and
                                    technology
                                </li>
                                <li>
                                    Training and mentorship programs for
                                    aspiring traders
                                </li>
                                <li>Support services for active traders</li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                <strong className="font-semibold">
                                    Important:
                                </strong>{" "}
                                Nitara Securities is NOT:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>A public fund manager</li>
                                <li>A brokerage firm accepting public funds</li>
                                <li>An investment advisory service</li>
                                <li>A platform for retail investors</li>
                            </ul>
                        </section>

                        {/* 3. Eligibility and Application */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                3. Eligibility and Application
                            </h2>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                3.1 General Eligibility
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                To apply for a trading position at Nitara
                                Securities, you must:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Be legally eligible to work in India</li>
                                <li>
                                    Meet minimum age requirements (18+ years)
                                </li>
                                <li>
                                    Have or be willing to obtain NISM
                                    certification
                                </li>
                                <li>
                                    Provide accurate and complete information in
                                    your application
                                </li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                3.2 Application Process
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                Submission of an application does not guarantee
                                acceptance. We reserve the right to:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Accept or reject applications at our sole
                                    discretion
                                </li>
                                <li>
                                    Request additional information or
                                    documentation
                                </li>
                                <li>
                                    Conduct background checks and verification
                                </li>
                                <li>
                                    Terminate the application process at any
                                    stage
                                </li>
                            </ul>
                        </section>

                        {/* 4. Trader Agreement */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                4. Trader Agreement
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                If accepted as a trader, you will be required to
                                sign a separate Trader Agreement that will
                                govern:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Your employment or engagement terms</li>
                                <li>Capital allocation and trading limits</li>
                                <li>
                                    Profit sharing and compensation structure
                                </li>
                                <li>Risk management protocols</li>
                                <li>
                                    Confidentiality and non-disclosure
                                    obligations
                                </li>
                                <li>Termination conditions</li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                The Trader Agreement will supersede these Terms
                                with respect to your trading activities.
                            </p>
                        </section>

                        {/* 5. Website Use */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                5. Website Use
                            </h2>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                5.1 Permitted Use
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                You may use our website for lawful purposes,
                                including:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Researching our services and opportunities
                                </li>
                                <li>Submitting applications</li>
                                <li>Contacting us with inquiries</li>
                                <li>Accessing educational content</li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                5.2 Prohibited Activities
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                You agree NOT to:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Use automated systems (bots, scrapers) to
                                    access the website
                                </li>
                                <li>
                                    Attempt to gain unauthorized access to our
                                    systems
                                </li>
                                <li>
                                    Transmit viruses, malware, or harmful code
                                </li>
                                <li>
                                    Interfere with website functionality or
                                    security
                                </li>
                                <li>
                                    Misrepresent your identity or affiliation
                                </li>
                                <li>
                                    Use the website for illegal or unauthorized
                                    purposes
                                </li>
                                <li>
                                    Copy, reproduce, or redistribute our content
                                    without permission
                                </li>
                            </ul>
                        </section>

                        {/* 6. Intellectual Property */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                6. Intellectual Property
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                All content on this website, including but not
                                limited to text, graphics, logos, images,
                                software, and design, is the property of Nitara
                                Securities and is protected by copyright,
                                trademark, and other intellectual property laws.
                            </p>
                            <p className="text-twilight-700 mb-4">
                                You may not:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Use our trademarks, logos, or branding
                                    without written permission
                                </li>
                                <li>
                                    Modify, copy, or create derivative works
                                    from our content
                                </li>
                                <li>
                                    Reverse engineer our proprietary software or
                                    technology
                                </li>
                                <li>
                                    Remove or alter copyright notices or
                                    proprietary markings
                                </li>
                            </ul>
                        </section>

                        {/* 7. Disclaimers */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                7. Disclaimers
                            </h2>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                7.1 No Investment Advice
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                Nitara Securities does NOT provide investment
                                advice, financial planning, or recommendations
                                to the public. Our services are limited to
                                in-house proprietary trading operations.
                            </p>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                7.2 No Guarantees
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                We make no guarantees regarding:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Trading profitability or performance</li>
                                <li>Specific income levels or earnings</li>
                                <li>Employment or engagement offers</li>
                                <li>Success in training programs</li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                7.3 Trading Risks
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                Trading in financial markets involves
                                substantial risk. While traders at Nitara
                                Securities use firm capital (not personal
                                funds), trading activities are subject to market
                                risks, volatility, and potential losses.
                            </p>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                7.4 Website "As Is"
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                Our website and services are provided "as is"
                                without warranties of any kind, either express
                                or implied, including but not limited to
                                warranties of merchantability, fitness for a
                                particular purpose, or non-infringement.
                            </p>
                        </section>

                        {/* 8. Limitation of Liability */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                8. Limitation of Liability
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                To the fullest extent permitted by law, Nitara
                                Securities shall not be liable for:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Indirect, incidental, or consequential
                                    damages
                                </li>
                                <li>Loss of profits, revenue, or data</li>
                                <li>
                                    Business interruption or opportunity costs
                                </li>
                                <li>
                                    Damages arising from use or inability to use
                                    our website or services
                                </li>
                                <li>
                                    Damages resulting from unauthorized access
                                    to or alteration of your data
                                </li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                Our total liability to you for any claim shall
                                not exceed the amount you paid to us (if any) in
                                the six months preceding the claim.
                            </p>
                        </section>

                        {/* 9. Indemnification */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                9. Indemnification
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                You agree to indemnify, defend, and hold
                                harmless Nitara Securities, its officers,
                                directors, employees, and agents from any
                                claims, liabilities, damages, losses, or
                                expenses (including legal fees) arising from:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Your violation of these Terms</li>
                                <li>Your use or misuse of our services</li>
                                <li>Your violation of any law or regulation</li>
                                <li>Your violation of third-party rights</li>
                                <li>
                                    Any information or content you submit to us
                                </li>
                            </ul>
                        </section>

                        {/* 10. Termination */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                10. Termination
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We reserve the right to:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Suspend or terminate your access to our
                                    website at any time
                                </li>
                                <li>
                                    Remove or disable any content you submit
                                </li>
                                <li>Refuse service to anyone for any reason</li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                Upon termination, all provisions of these Terms
                                that by their nature should survive will remain
                                in effect, including ownership provisions,
                                warranty disclaimers, and limitations of
                                liability.
                            </p>
                        </section>

                        {/* 11. Governing Law */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                11. Governing Law and Jurisdiction
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                These Terms shall be governed by and construed
                                in accordance with the laws of India. Any
                                disputes arising from these Terms or your use of
                                our services shall be subject to the exclusive
                                jurisdiction of the courts in Ghaziabad, Uttar
                                Pradesh, India.
                            </p>
                        </section>

                        {/* 12. Changes to Terms */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                12. Changes to Terms
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We reserve the right to modify these Terms at
                                any time. Changes will be effective immediately
                                upon posting on our website. Your continued use
                                of our services after changes are posted
                                constitutes acceptance of the modified Terms.
                            </p>
                            <p className="text-twilight-700 mb-4">
                                We will update the "Last Updated" date at the
                                top of this page when changes are made.
                            </p>
                        </section>

                        {/* 13. Severability */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                13. Severability
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                If any provision of these Terms is found to be
                                unenforceable or invalid, that provision will be
                                limited or eliminated to the minimum extent
                                necessary, and the remaining provisions will
                                remain in full force and effect.
                            </p>
                        </section>

                        {/* 14. Entire Agreement */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                14. Entire Agreement
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                These Terms, together with our Privacy Policy,
                                constitute the entire agreement between you and
                                Nitara Securities regarding your use of our
                                website and services, superseding any prior
                                agreements.
                            </p>
                        </section>

                        {/* 15. Contact Information */}
                        <section className="mb-0">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                15. Contact Information
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                If you have questions about these Terms and
                                Conditions, please contact us:
                            </p>
                            <div className="border-pacific-200 bg-pacific-50 rounded-xl border-2 p-6">
                                <p className="text-twilight-900 mb-2 font-semibold">
                                    Nitara Securities
                                </p>
                                <p className="text-twilight-700">
                                    Email:{" "}
                                    <a
                                        href="mailto:info@nitarasecurities.com"
                                        className="text-pacific-600 font-semibold hover:underline"
                                    >
                                        info@nitarasecurities.com
                                    </a>
                                </p>
                                <p className="text-twilight-700">
                                    Phone:{" "}
                                    <a
                                        href="tel:+917503975037"
                                        className="text-pacific-600 font-semibold hover:underline"
                                    >
                                        75039 75037
                                    </a>
                                </p>
                                <p className="text-twilight-700">
                                    Address: Ghaziabad, Uttar Pradesh, India
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
