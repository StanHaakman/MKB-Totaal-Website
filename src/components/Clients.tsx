import {FadeIn, FadeInStagger} from "./FadeIn.tsx";

const clients = [
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/tuple-logo-white.svg',
    },
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/reform-logo-white.svg',
    },
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/savvycal-logo-white.svg',
    },
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/laravel-logo-white.svg',
    },
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/transistor-logo-white.svg',
    },
    {
        name: 'test',
        description: 'test',
        Image: 'https://tailwindui.com/plus/img/logos/statamic-logo-white.svg',
    },
]

export default function Clients() {
    return (
        <div className="bg-primary py-24 sm:py-32 w-full">
            <FadeInStagger faster={true}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 container">
                    <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <FadeIn>
                                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                    Samen groeien naar succes
                                </h2>
                                <p className="mt-6 text-lg/8 text-gray-300">
                                    Bij MKB-Totaal staan onze klanten centraal. We hebben al talloze bedrijven geholpen om hun processen te verbeteren en resultaten te behalen die ze nooit voor mogelijk hielden. Samen bouwen we aan oplossingen die passen bij jouw ambities en doelen.
                                </p>
                                <div className="mt-8 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-transparent border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-primary transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Doe de quickscan
                                    </a>
                                    <a href="#" className="text-sm font-semibold text-white group">
                                        Of neem contact op <span className={`ml-0 group-hover:ml-2 transition-all duration-200`} aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                        <div
                            className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">

                            {clients.map((client) => (
                                <FadeIn>
                                    <div key={client.name} className="relative flex items-center justify-center">
                                        <img
                                            alt={client.name}
                                            src={client.Image}
                                            height={48}
                                            className="max-h-12 h-full w-full object-contain object-left"
                                        />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInStagger>
        </div>
)
}
