import {FadeIn, FadeInStagger} from "./FadeIn.tsx";

export default function CTA() {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:py-28 lg:px-8">
                <FadeIn>
                    <div
                        className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">

                        <FadeInStagger>
                            <FadeIn>
                                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                    Ontdek hoe wij jouw bedrijf naar het volgende niveau tillen
                                </h2>
                            </FadeIn>
                            <FadeIn>
                                <p className="mx-auto mt-6 max-w-xl text-pretty text-md/8 sm:text-lg/8 text-gray-200">
                                    Of je nu op zoek bent naar innovatieve oplossingen of een snelle analyse van je
                                    processen,
                                    wij staan klaar om je te helpen. Neem contact op voor meer informatie of start
                                    direct met
                                    een gratis quickscan!
                                </p>
                            </FadeIn>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <FadeIn>
                                    <a
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Contact opnemen
                                    </a>
                                </FadeIn>
                                <FadeIn>
                                    <a href="#" className="text-sm/6 font-semibold text-white">
                                        Doe de quickscan <span aria-hidden="true">→</span>
                                    </a>
                                </FadeIn>
                            </div>
                        </FadeInStagger>
                    </div>
                </FadeIn>
            </div>

        </div>
    )
}
