import heroImage from '../assets/images/hero-image.webp';
import {ArrowDownIcon} from '@heroicons/react/24/solid';
import {FadeIn, FadeInStagger} from './FadeIn';

export default function Hero() {
    return (
        <div id={"hero"} className="relative w-full h-[80vh] bottom-20 md:bottom-10 -mb-20 md:-mb-10">
            {/* Background Image */}
            <img
                className="absolute inset-0 grayscale opacity-80 object-cover w-full h-full"
                aria-hidden="true"
                src={heroImage}
            ></img>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-80"></div>

            {/* Content */}
            <div
                className="container relative z-10 flex flex-col items-start justify-end text-white px-4 pb-16 md:pb-36 mx-auto h-full">
                <FadeInStagger faster={true}>
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welkom bij MKB-Totaal.com</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-lg md:text-xl max-w-2xl mb-8">
                            Wij automatiseren en digitaliseren de maakindustrie!
                        </p>
                    </FadeIn>
                    <div className="flex gap-8 sm:gap-4 flex-col sm:flex-row text-left">
                        <FadeIn>
                            <a
                                href="#services"
                                className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg shadow-md duration-200 transition"
                            >
                                Wat wij doen
                            </a>
                        </FadeIn>
                        <FadeIn>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg shadow-md duration-200 transition"
                            >
                                Neem Contact Op
                            </a>
                        </FadeIn>
                    </div>
                </FadeInStagger>
            </div>

            {/* Arrow Down */}
            <div
                className="absolute bottom-4 md:bottom-6 right-4 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                <a href={"#services"}
                   className="flex justify-center items-center w-12 h-12 border-2 border-white rounded-full motion-safe:animate-bounce duration-200 transition hover:bg-white/80 group">
                    <ArrowDownIcon className="w-6 h-6 text-white group-hover:text-primary duration-200 transition"/>
                </a>
            </div>
        </div>
    );
};
