"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPinned, MoveUpRight, Phone } from "lucide-react";
import FooterLogo from "../../../public/assets/logo/wordmark-dark.svg";

function Footer() {
    return (
        <footer className="border-pacific bg-twilight-950 border-t-2 text-white">
            <section className="border-pacific border-t px-4 py-8">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 lg:flex-row">
                    {/* Intro */}
                    <div className="w-full max-w-100">
                        <Image
                            src={FooterLogo}
                            width={150}
                            height={80}
                            alt="Nitara Securities Logo"
                        />
                        <p className="mt-4">
                            Nitara Securities operates a structured proprietary
                            trading desk focused on disciplined execution, risk
                            management, and process-driven trading in Indian
                            market instruments.
                            <br />
                            For more info, visit{" "}
                            <Link
                                href="#"
                                className="text-pacific mt-2 inline-flex items-center hover:underline"
                            >
                                LinkedIn <MoveUpRight size={16} />
                            </Link>
                        </p>
                    </div>

                    <div className="flex w-full flex-col justify-end gap-8 sm:flex-row">
                        {/* Quick Links */}
                        <div className="w-full min-w-fit">
                            <h3 className="text-pacific mb-4 font-semibold tracking-wide">
                                QUICK LINKS
                            </h3>
                            <ul className="flex flex-col gap-2">
                                <li>About</li>
                                <li>How its work</li>
                                <li>Platform</li>
                                <li>Rules</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="w-full min-w-fit">
                            <h3 className="text-pacific mb-4 font-semibold tracking-wide">
                                RESOURCES
                            </h3>
                            <ul className="flex flex-col gap-2">
                                <li>FAQ</li>
                                <li>Team</li>
                                <li>Apply as trader</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* Get in touch */}
                        <div className="w-full min-w-fit">
                            <h3 className="text-pacific mb-4 font-semibold tracking-wide">
                                GET IN TOUCH
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center justify-start gap-2">
                                    <Phone size={18} />
                                    <Link href="tel">75039 75037</Link>
                                </li>
                                <li className="flex items-center justify-start gap-2">
                                    <Mail size={18} />
                                    info@nitarasecurities.com
                                </li>

                                <li className="flex items-center justify-start gap-2">
                                    <MapPinned size={18} />
                                    Ghaziabad, UP, India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important */}
            <section className="border-pacific bg-twilight-900 border-t px-4">
                <div className="mx-auto max-w-4xl py-8 text-center">
                    <h3 className="text-pacific mb-4 font-semibold tracking-wide uppercase">
                        Important Disclaimer
                    </h3>
                    <p className="text-center text-sm">
                        Nitara Securities does not provide investment advisory
                        services. Participation in trading activities is subject
                        to internal evaluation and desk rules. No guarantees or
                        profit claims are made.
                    </p>
                </div>
            </section>

            {/* Copyright */}
            <section className="border-pacific border-t px-4">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 py-8 text-sm md:flex-row md:justify-between">
                    <h4>© 2026 Nitara Securities. All rights reserved.</h4>

                    <h4>
                        Made with love by{" "}
                        <Link href="https://www.tecorbitron.com/" className="">
                            Tecorbitron
                        </Link>
                    </h4>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
