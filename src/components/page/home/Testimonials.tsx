"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Verma",
        role: "Professional Trader",
        experience: "Joined as Experienced Trader",
        rating: 5,
        content:
            "Nitara Securities provided me the capital backing I always needed. The platform is incredibly fast, and the risk management systems give me confidence to execute my strategies without worrying about personal losses.",
        image: "RV",
    },
    {
        name: "Sneha Kapoor",
        role: "Junior Trader",
        experience: "Started as Newcomer",
        rating: 5,
        content:
            "I had zero trading experience when I joined. The training program was comprehensive, and my mentor guided me every step. Now I'm trading with real capital and earning consistently. Best decision of my career!",
        image: "SK",
    },
    {
        name: "Amit Desai",
        role: "Senior Trader",
        experience: "2+ years at Nitara",
        rating: 5,
        content:
            "The collaborative environment here is unmatched. Daily strategy discussions with fellow traders have significantly improved my edge. The profit-sharing model is fair and transparent.",
        image: "AD",
    },
    {
        name: "Priya Malhotra",
        role: "Options Trader",
        experience: "Joined as Experienced Trader",
        rating: 5,
        content:
            "Finally found a place where I can trade without capital constraints. The algo platform is top-notch, and execution speed is phenomenal. Support team is always available when needed.",
        image: "PM",
    },
    {
        name: "Karthik Iyer",
        role: "Day Trader",
        experience: "Started as Newcomer",
        rating: 5,
        content:
            "The NISM certification support was invaluable. After training, I was gradually given more capital as I proved consistency. The structured approach here helped me become a disciplined trader.",
        image: "KI",
    },
    {
        name: "Neha Joshi",
        role: "Swing Trader",
        experience: "1+ year at Nitara",
        rating: 5,
        content:
            "The risk management rules initially felt restrictive, but I now realize they saved me from major losses. The mentorship program is exceptional - learning from experienced traders accelerated my growth tremendously.",
        image: "NJ",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const currentTestimonial = testimonials[currentIndex];

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section
            ref={ref}
            className="from-twilight-50 to-pacific-50/30 relative overflow-hidden bg-linear-to-br px-4 py-16 lg:py-24"
        >
            {/* Decorative Elements */}
            <div className="bg-pacific-200/30 absolute top-20 -right-20 h-80 w-80 rounded-full blur-3xl" />
            <div className="bg-bamber-200/30 absolute bottom-20 -left-20 h-80 w-80 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="border-pacific-200 text-pacific-700 mb-4 inline-flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                        <Quote size={16} />
                        <span>Testimonials</span>
                    </div>
                    <h2 className="text-twilight-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        What Our Traders{" "}
                        <span className="text-pacific-600">Say</span>
                    </h2>
                    <div className="from-pacific-500 to-bamber-500 mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r" />
                    <p className="text-twilight-600 mx-auto max-w-3xl text-lg leading-relaxed">
                        Real experiences from traders who have built successful
                        careers at Nitara Securities.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Testimonial Card */}
                    <div className="relative mx-auto max-w-4xl overflow-hidden">
                        <AnimatePresence
                            initial={false}
                            custom={direction}
                            mode="wait"
                        >
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.3 },
                                }}
                                className="relative"
                            >
                                <div className="group border-twilight-100 hover:border-pacific-300 relative overflow-hidden rounded-3xl border-2 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl md:p-14">
                                    {/* Quote Icon Background */}
                                    <div className="absolute -top-8 -right-8 opacity-5">
                                        <Quote
                                            size={200}
                                            className="text-pacific-600"
                                        />
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="relative mb-6 flex justify-center gap-1">
                                        {[
                                            ...Array(currentTestimonial.rating),
                                        ].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={24}
                                                className="fill-bamber-500 text-bamber-500"
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-twilight-700 relative mb-10 text-center text-xl leading-relaxed md:text-2xl">
                                        "{currentTestimonial.content}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="border-twilight-100 relative flex flex-col items-center gap-4 border-t pt-8">
                                        {/* Avatar */}
                                        <div className="from-pacific-500 to-pacific-600 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white shadow-lg">
                                            {currentTestimonial.image}
                                        </div>

                                        {/* Details */}
                                        <div className="text-center">
                                            <h4 className="text-twilight-900 mb-1 text-xl font-bold">
                                                {currentTestimonial.name}
                                            </h4>
                                            <p className="text-pacific-700 mb-1 font-semibold">
                                                {currentTestimonial.role}
                                            </p>
                                            <p className="text-twilight-600 text-sm">
                                                {currentTestimonial.experience}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Accent */}
                                    <div className="from-pacific-500 to-bamber-500 absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-linear-to-r transition-all duration-300 group-hover:w-full" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute top-1/2 right-0 left-0 z-10 flex -translate-y-1/2 justify-between px-4">
                        <button
                            onClick={handlePrev}
                            className="group border-twilight-200 hover:border-pacific-500 hover:bg-pacific-500 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft
                                size={24}
                                className="text-twilight-600 transition-colors group-hover:text-white"
                            />
                        </button>

                        <button
                            onClick={handleNext}
                            className="group border-twilight-200 hover:border-pacific-500 hover:bg-pacific-500 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight
                                size={24}
                                className="text-twilight-600 transition-colors group-hover:text-white"
                            />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="mt-10 flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-pacific-600 w-10"
                                        : "bg-twilight-300 hover:bg-pacific-400 w-3"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="text-twilight-600 mt-6 text-center text-sm font-medium">
                        {currentIndex + 1} / {testimonials.length}
                    </div>
                </div>
            </div>
        </section>
    );
}
