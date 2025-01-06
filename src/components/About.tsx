import {StylizedImage} from './StylizedImage';
import {FadeIn, FadeInStagger} from './FadeIn';

import imageHero from '../assets/images/hero-image.webp';

export default function About() {
    return (

        <FadeInStagger>
            <section className="lg:flex lg:items-center lg:justify-end">
                <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                        <StylizedImage
                            shape={3} // Gebruik de gewenste shape
                            src={imageHero}
                            alt="About Us"
                            className="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale"
                        />
                    </FadeIn>
                </div>
                <FadeIn>
                    <div className="flex flex-col items-start text-left shrink-0 py-36">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Over Ons</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            MKB-Totaal.com is ontstaan vanuit de behoefte in de markt. Wij focussen ons met name op het
                            MKB en zien
                            een grote behoefte aan ondersteuning op het gebied van digitaliseren en automatiseren. Als
                            MKB-Totaal.com
                            willen wij meer dan de sparringspartner van de DGA en financiële afdeling zijn. Wij werken
                            hands-on mee
                            aan oplossingen, bedenken deze en voeren ze ook uit!
                        </p>
                        <a
                            href="https://www.teamviewer.com/link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Hebben wij u verzocht om via TeamViewer samen te werken? Klik hier.
                        </a>
                    </div>
                </FadeIn>
            </section>
        </FadeInStagger>
    );
}
