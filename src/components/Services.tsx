import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {ChartPieIcon, ClockIcon, ComputerDesktopIcon, ChartBarIcon} from '@heroicons/react/24/outline';
import {FadeIn, FadeInStagger} from './FadeIn';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/pagination';

const features = [
    {
        name: 'Praktische oplossingen voor maximale efficiëntie',
        description:
            'MKB-Totaal biedt praktische oplossingen om uw bedrijfsprocessen te optimaliseren. Of het nu gaat om tijd besparen, projectondersteuning of data-analyse, wij staan klaar met deskundigheid en ervaring. Ontdek hoe onze services u verder kunnen helpen.',
        icon: ClockIcon,
    },
    {
        name: 'Projectondersteuning bij implementaties',
        description:
            'De dagelijkse bedrijfsvoering vraagt al genoeg aandacht. Het begeleiden van een nieuwe (ERP-)systeemimplementatie kan dan een uitdaging zijn. Met onze ruime ervaring zorgen wij voor een soepele implementatie. Geen theoretische modellen, maar praktische begeleiding en realisatie.',
        icon: ChartBarIcon,
    },
    {
        name: 'Inzicht in wat echt telt',
        description:
            'Waar verdienen wij ons geld? Hoe staan we ervoor? Wij helpen deze vragen te beantwoorden door belangrijke data en KPI’s inzichtelijk te maken. Van project- en productieresultaten tot uw cashpositie – wij maken complexe informatie begrijpelijk.',
        icon: ChartPieIcon,
    },
    {
        name: 'Diepgaande kennis van systemen en tools',
        description:
            'Wij hebben jarenlange ervaring met:\n ' +
            '\n' +
            'Exact Online, Exact Globe, AccountView\n' +
            'Ridder iQ, Microsoft Access & Excel (incl. VBA)\n' +
            'QlikSense, Power BI, SAP Analytics Cloud (SAC)\n' +
            'Torza ERP',
        icon: ComputerDesktopIcon,
    },
];

export default function Services() {

    return (
        <div id="services" className="relative w-full py-24">
            <div className="mx-auto max-w-7xl px-0 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-2xl lg:text-center px-6 lg:px-0">
                        <h2 className="text-base/7 font-semibold text-primary-light">Wat wij bieden</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-balance">
                            Efficiëntie, inzicht en ondersteuning voor uw bedrijf
                        </p>
                        <p className="mt-6 text-lg/6 text-gray-800 dark:text-white">
                            MKB-Totaal biedt praktische oplossingen om uw bedrijfsprocessen te optimaliseren. Of het nu
                            gaat om tijd besparen, projectondersteuning of
                            data-analyse, wij staan klaar met deskundigheid en ervaring. Ontdek hoe onze services u
                            verder kunnen helpen.
                        </p>
                    </div>
                </FadeIn>
                
                <FadeInStagger faster className={"hidden lg:flex"}>
                    <div className={"mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl px-6"}>
                        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-12">
                            
                            {features.map((feature) => (
                                <FadeIn key={feature.name}>
                                    <div className="relative lg:pl-16 group scroll-ml-6 snap-start shrink-0 w-[65vw] lg:max-w-full">
                                        <dt className="text-base/7 font-semibold text-primary-light">

                                            <div className="relative lg:absolute left-0 top-0 mb-6 flex size-16 lg:size-10 items-center justify-center rounded-lg bg-primary group-hover:bg-primary-light">
                                                <feature.icon aria-hidden="true" className="size-10 lg:size-6 text-white" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2 text-base/7 text-gray-900 dark:text-gray-300">{feature.description}</dd>
                                    </div>
                                </FadeIn>
                            ))}
                            
                        </div>
                    </div>
                </FadeInStagger>

                <FadeInStagger faster className={"lg:hidden"}>
                    <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl px-6">
                        
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1.2}
                            breakpoints={
                                {
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    }
                                }
                            }
                            pagination={{clickable: true}}
                            modules={[Pagination]}
                            className="!pb-10 show-swiper lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12"
                        >
                            {features.map((feature) => (
                                <SwiperSlide key={feature.name} className="h-full flex-initial">
                                    <FadeIn>
                                        <div
                                            className="relative group p-0 bg-white rounded-lg overflow-hidden shadow-lg min-h-[500px] md:min-h-[400px]"
                                        >
                                            <dt className="card-header flex items-center justify-between gap-x-3 text-primary font-semibold h-[100px] sm:h-[80px] bg-primary/20 p-3">
                                                <feature.icon className="flex-1 size-6 max-w-[40px]"
                                                              aria-hidden="true"/>
                                                <span className="flex-1 shrink">{feature.name}</span>
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-900 dark:text-gray-200 px-4 pt-2 pb-4">{feature.description}</dd>
                                        </div>
                                    </FadeIn>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </FadeInStagger>
            </div>
        </div>
    );
}
