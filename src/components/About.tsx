import {StylizedImage} from './StylizedImage';
import {FadeIn, FadeInStagger} from './FadeIn';

import imageHero from '../assets/images/hero-image.webp';

export default function About() {
    return (

        <FadeInStagger className={"relative w-full"} id={"about-us"}>
            <section className={"flex justify-end items-center flex-col lg:flex-row"}>
                <div className="row w-full lg:w-4/12 xl:w-1/2 h-auto grow-0 max-h-[33rem] lg:max-h-full overflow-hidden">
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
                    <FadeIn className={'mx-auto max-w-full lg:max-w-xl pb-12 lg:pb-24 pt-16 px-8'}>
                        <h2 className="text-base/7 font-semibold text-primary-light">Voor en door ondernemers</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-balance">
                            Het kloppende hart van het MKB-Totaal.com
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                            MKB-Totaal.com is ontstaan vanuit de behoefte in de markt. Wij focussen ons met name op het
                            MKB en zien
                            een grote behoefte aan ondersteuning op het gebied van digitaliseren en automatiseren. Als
                            MKB-Totaal.com
                            willen wij meer dan de sparringspartner van de DGA en financiële afdeling zijn. Wij werken
                            hands-on mee
                            aan oplossingen, bedenken deze en voeren ze ook uit!
                        </p>
                    </FadeIn>
                </div>

            </section>
        </FadeInStagger>
    );
}
