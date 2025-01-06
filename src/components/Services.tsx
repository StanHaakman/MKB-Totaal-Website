import { ChartPieIcon, ClockIcon, ComputerDesktopIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import {FadeIn, FadeInStagger} from "./FadeIn.tsx";

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
    name: 'Inzicht in wat echt teltSimple queues',
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
]

export default function Services() {
  return (
      <div className="relative w-full py-24">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center px-6 lg:px-0">
            <h2 className="text-base/7 font-semibold text-primary-light">Wat wij bieden</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-balance">
              Efficiëntie, inzicht en ondersteuning voor uw bedrijf
            </p>
            <p className="mt-6 text-lg/6 text-gray-800 dark:text-white">
              MKB-Totaal biedt praktische oplossingen om uw bedrijfsprocessen te optimaliseren. Of het nu gaat om tijd besparen, projectondersteuning of data-analyse, wij staan klaar met deskundigheid en ervaring. Ontdek hoe onze services u verder kunnen helpen.
            </p>
          </div>
          </FadeIn>
          <FadeInStagger faster>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="flex snap-x overflow-x-auto lg:overflow-y-hidden pb-4 lg:grid gap-x-8 shrink-0 w-full lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pr-16 px-6 lg:px-0">
              
              {features.map((feature) => (
                  <FadeIn>
                  <div key={feature.name} className="relative lg:pl-16 group scroll-ml-6 snap-start shrink-0 max-w-72 lg:max-w-full">
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
            </dl>
          </div>
          </FadeInStagger>
        </div>
      </div>
  )
}