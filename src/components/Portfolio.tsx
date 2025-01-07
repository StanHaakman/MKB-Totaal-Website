import {FadeIn, FadeInStagger} from "./FadeIn.tsx";

const portfolioItems = [
    {
        id: 1,
        business: "Van Rooi Hekwerken",
        startSamenwerking: "2021",
        description: "Voor Van Rooi Hekwerken hebben we Ridder IQ ingezet, een financieel programma, om hen te ondersteunen bij het verkrijgen van helder financieel inzicht en het optimaliseren van hun bedrijfsvoering.",
    },
    {
        id: 2,
        business: "Van Rooi Hekwerken",
        startSamenwerking: "2021",
        description: "Voor Van Rooi Hekwerken hebben we Ridder IQ ingezet, een financieel programma, om hen te ondersteunen bij het verkrijgen van helder financieel inzicht en het optimaliseren van hun bedrijfsvoering.",
    },
    {
        id: 3,
        business: "Van Rooi Hekwerken",
        startSamenwerking: "2021",
        description: "Voor Van Rooi Hekwerken hebben we Ridder IQ ingezet, een financieel programma, om hen te ondersteunen bij het verkrijgen van helder financieel inzicht en het optimaliseren van hun bedrijfsvoering.",
    },
]

export default function Portofolio() {
    return (
        <div className="py-16 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                    <div className="w-full lg:max-w-lg lg:flex-auto">
                        <FadeInStagger faster={true}>
                            <FadeIn>
                                <h2 className="text-base/7 font-semibold text-primary-light">Samen sterker</h2>
                                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-balance">
                                    Praktische oplossingen voor groei en succes
                                </p>
                                <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-200">
                                    Bij Staal AI werken we samen met toonaangevende bedrijven en maken we gebruik van
                                    krachtige tools om processen en inzichten te verbeteren. Hier is een voorbeeld van
                                    onze aanpak in samenwerking.
                                </p>
                            </FadeIn>
                            <FadeIn>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                                    className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                                />
                            </FadeIn>
                        </FadeInStagger>
                    </div>
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <FadeIn>
                            <h3 className="sr-only">Onze waardevolle samenwerkingen</h3>
                        </FadeIn>
                        <FadeInStagger>
                            <ul className="-my-8 divide-y divide-gray-100 dark:divide-gray-600">
                                {portfolioItems.map((item) => (
                                    <FadeIn key={item.id}>
                                        <li className="py-8">
                                            <dl className="relative flex flex-wrap gap-x-3">
                                                <dt className="sr-only">Klant</dt>
                                                <dd>
                                                    <p className="text-lg font-semibold tracking-tight text-primary dark:text-primary-light">
                                                        {item.business}
                                                        <span aria-hidden="true" className="absolute inset-0"/>
                                                    </p>
                                                </dd>
                                                <dt className="sr-only">Omschrijving</dt>
                                                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-200">{item.description}</dd>
                                                <dt className="sr-only">Start samenwerking</dt>
                                                <dd className="mt-4 text-base/7 font-semibold text-gray-900 dark:text-gray-500">Trouwe samenwerking sinds {item.startSamenwerking}</dd>
                                            </dl>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ul>
                        </FadeInStagger>
                        <div className="mt-8 flex border-t border-gray-100 pt-8 hidden">
                            <a href="#" className="text-sm/6 font-semibold text-primary hover:text-primary-light">
                                Bekijk alle samenwerkingen <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
