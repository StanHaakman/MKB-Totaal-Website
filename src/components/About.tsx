import {StylizedImage} from './StylizedImage';
import {FadeIn, FadeInStagger} from './FadeIn';

import imageHero from '../assets/images/hero-image.webp';

export default function About() {
    return (

        <FadeInStagger className={"relative w-full"} id={"about-us"}>
            <section className={"flex justify-end items-center flex-col lg:flex-row"}>
                <div className="row w-full lg:w-7/12 xl:w-1/2 h-auto grow-0 max-h-[33rem] lg:max-h-full overflow-hidden">
                    <FadeIn opacityOnly={true}>
                        <StylizedImage
                            shape={3} // Gebruik de gewenste shape
                            src={imageHero}
                            alt="About Us"
                            className=""
                        />
                    </FadeIn>
                </div>
                
                <div className="row contents">
                    <FadeIn className={'mx-auto max-w-md xl:max-w-2xl pb-24 pt-16 px-8'}>
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
                    </FadeIn>
                </div>

            </section>
        </FadeInStagger>
    );
}
