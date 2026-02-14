"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
                            <Shield size={16} />
                            <span>Legal</span>
                        </div>
                        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Privacy Policy
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
                                At Nitara Securities, we are committed to
                                protecting your privacy and ensuring the
                                security of your personal information. This
                                Privacy Policy explains how we collect, use,
                                disclose, and safeguard your information when
                                you visit our website or engage with our
                                services.
                            </p>
                        </div>

                        {/* 1. Information We Collect */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                1. Information We Collect
                            </h2>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                1.1 Personal Information
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                We may collect personal information that you
                                voluntarily provide to us when you:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Fill out application forms</li>
                                <li>
                                    Contact us via phone, email, or contact
                                    forms
                                </li>
                                <li>
                                    Register for an account or apply for trading
                                    positions
                                </li>
                                <li>Subscribe to our communications</li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                This information may include:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Mailing address</li>
                                <li>Date of birth</li>
                                <li>Educational background</li>
                                <li>Employment history</li>
                                <li>Trading experience and qualifications</li>
                                <li>NISM certification details</li>
                                <li>
                                    Financial information (for approved traders)
                                </li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                1.2 Automatically Collected Information
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                When you visit our website, we may automatically
                                collect certain information about your device,
                                including:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Referring URLs</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Device identifiers</li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                1.3 Cookies and Tracking Technologies
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                We use cookies and similar tracking technologies
                                to enhance your experience on our website. You
                                can control cookies through your browser
                                settings.
                            </p>
                        </section>

                        {/* 2. How We Use Your Information */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We use the information we collect for the
                                following purposes:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    To process and evaluate your application for
                                    trading positions
                                </li>
                                <li>
                                    To communicate with you regarding your
                                    application or inquiries
                                </li>
                                <li>
                                    To provide, operate, and maintain our
                                    services
                                </li>
                                <li>
                                    To verify your identity and qualifications
                                </li>
                                <li>
                                    To comply with legal and regulatory
                                    requirements
                                </li>
                                <li>
                                    To improve our website, services, and user
                                    experience
                                </li>
                                <li>
                                    To send you updates, newsletters, and
                                    marketing communications (with your consent)
                                </li>
                                <li>
                                    To detect, prevent, and address technical
                                    issues or fraudulent activity
                                </li>
                                <li>
                                    To maintain records for business and legal
                                    purposes
                                </li>
                            </ul>
                        </section>

                        {/* 3. How We Share Your Information */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                3. How We Share Your Information
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We do not sell, rent, or trade your personal
                                information to third parties. We may share your
                                information in the following circumstances:
                            </p>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                3.1 Service Providers
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                We may share information with trusted
                                third-party service providers who assist us in
                                operating our business, such as:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Website hosting and maintenance providers
                                </li>
                                <li>
                                    Email and communication service providers
                                </li>
                                <li>Background verification services</li>
                                <li>
                                    Analytics and performance monitoring
                                    services
                                </li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                3.2 Legal Requirements
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                We may disclose your information if required by
                                law or in response to valid legal requests from
                                governmental authorities, including:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>Compliance with legal obligations</li>
                                <li>Protection of our rights and property</li>
                                <li>Investigation of potential violations</li>
                                <li>Protection of personal safety</li>
                            </ul>

                            <h3 className="text-twilight-800 mt-6 mb-3 text-xl font-semibold">
                                3.3 Business Transfers
                            </h3>
                            <p className="text-twilight-700 mb-4">
                                In the event of a merger, acquisition, or sale
                                of assets, your information may be transferred
                                to the acquiring entity.
                            </p>
                        </section>

                        {/* 4. Data Security */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                4. Data Security
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We implement appropriate technical and
                                organizational security measures to protect your
                                personal information from unauthorized access,
                                disclosure, alteration, or destruction. These
                                measures include:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Encryption of sensitive data during
                                    transmission (SSL/TLS)
                                </li>
                                <li>Secure servers and data storage</li>
                                <li>
                                    Regular security assessments and updates
                                </li>
                                <li>
                                    Access controls and authentication
                                    mechanisms
                                </li>
                                <li>Employee training on data protection</li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                However, no method of transmission over the
                                internet or electronic storage is 100% secure.
                                While we strive to protect your information, we
                                cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* 5. Data Retention */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                5. Data Retention
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We retain your personal information for as long
                                as necessary to fulfill the purposes outlined in
                                this Privacy Policy, unless a longer retention
                                period is required or permitted by law. When we
                                no longer need your information, we will
                                securely delete or anonymize it.
                            </p>
                            <p className="text-twilight-700 mb-4">
                                For applicants and active traders, we retain
                                information for the duration of the relationship
                                and for a period thereafter as required by
                                regulatory obligations and business needs.
                            </p>
                        </section>

                        {/* 6. Your Rights */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                6. Your Rights
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                Depending on your location, you may have the
                                following rights regarding your personal
                                information:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    <strong>Access:</strong> Request access to
                                    your personal information
                                </li>
                                <li>
                                    <strong>Correction:</strong> Request
                                    correction of inaccurate or incomplete
                                    information
                                </li>
                                <li>
                                    <strong>Deletion:</strong> Request deletion
                                    of your personal information
                                </li>
                                <li>
                                    <strong>Portability:</strong> Request
                                    transfer of your information to another
                                    organization
                                </li>
                                <li>
                                    <strong>Objection:</strong> Object to
                                    processing of your information
                                </li>
                                <li>
                                    <strong>Withdrawal of Consent:</strong>{" "}
                                    Withdraw consent for processing (where
                                    applicable)
                                </li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                To exercise these rights, please contact us at{" "}
                                <a
                                    href="mailto:info@nitarasecurities.com"
                                    className="text-pacific-600 font-semibold hover:underline"
                                >
                                    info@nitarasecurities.com
                                </a>
                            </p>
                        </section>

                        {/* 7. Children's Privacy */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                7. Children's Privacy
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                Our services are not directed to individuals
                                under the age of 18. We do not knowingly collect
                                personal information from children. If we become
                                aware that we have collected information from a
                                child, we will take steps to delete it promptly.
                            </p>
                        </section>

                        {/* 8. Third-Party Links */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                8. Third-Party Links
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                Our website may contain links to third-party
                                websites. We are not responsible for the privacy
                                practices or content of these external sites. We
                                encourage you to review the privacy policies of
                                any third-party sites you visit.
                            </p>
                        </section>

                        {/* 9. Changes to This Privacy Policy */}
                        <section className="mb-12">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                9. Changes to This Privacy Policy
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                We may update this Privacy Policy from time to
                                time to reflect changes in our practices or
                                legal requirements. We will notify you of any
                                material changes by:
                            </p>
                            <ul className="text-twilight-700 mb-4 space-y-2">
                                <li>
                                    Posting the updated policy on our website
                                </li>
                                <li>Updating the "Last Updated" date</li>
                                <li>
                                    Sending you an email notification (for
                                    significant changes)
                                </li>
                            </ul>
                            <p className="text-twilight-700 mb-4">
                                We encourage you to review this Privacy Policy
                                periodically.
                            </p>
                        </section>

                        {/* 10. Contact Us */}
                        <section className="mb-0">
                            <h2 className="text-twilight-900 mb-4 text-3xl font-bold">
                                10. Contact Us
                            </h2>
                            <p className="text-twilight-700 mb-4">
                                If you have any questions, concerns, or requests
                                regarding this Privacy Policy or our data
                                practices, please contact us at:
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
