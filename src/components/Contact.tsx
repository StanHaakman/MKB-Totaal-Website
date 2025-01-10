import {FadeIn, FadeInStagger} from "./FadeIn.tsx";
import TeamviewerButton from "./TeamviewerButton.tsx";

export default function Contact() {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row" id="contact">
            {/* Left Column with Primary Background */}
            <div className="flex-1 bg-primary flex justify-center items-center py-16 lg:py-32 px-10 shadow-md shadow-primary-light">
                <div className="text-white">
                    <FadeInStagger faster>
                        <FadeIn>
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Neem contact op
                            </h2>
                        </FadeIn>
                        <FadeIn>
                            <p className="mt-6 text-lg/8 text-gray-300">
                                Bij MKB-Totaal staan onze klanten centraal. We hebben al talloze bedrijven geholpen om
                                hun processen te verbeteren en indrukwekkende resultaten te bereiken. Samen ontwikkelen
                                we oplossingen die aansluiten bij jouw ambities en doelen.
                            </p>
                        </FadeIn>

                        <FadeIn>
                            <TeamviewerButton/>
                        </FadeIn>

                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-4">Contact Informatie</h2>
                        </FadeIn>

                        <dl className="space-y-4">
                            <FadeIn>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <dt className="font-bold text-gray-200">Locatie</dt>
                                        <dd className="text-white">21 Tosca, Krimpen aan den IJssel, 2926 PK,
                                            Zuid-Holland
                                        </dd>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <dt className="font-bold text-gray-200">Telefoon</dt>
                                        <dd className="text-white">+31 6 51506582</dd>
                                    </div>
                                    <div>
                                        <dt className="font-bold text-gray-200">E-mail</dt>
                                        <dd className="text-white">marco@mkb-totaal.com</dd>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <dt className="font-bold text-gray-200">BTW Nummer</dt>
                                        <dd className="text-white">NL123456789B01</dd>
                                    </div>
                                    <div>
                                        <dt className="font-bold text-gray-200">KvK Nummer</dt>
                                        <dd className="text-white">12345678</dd>
                                    </div>
                                </div>
                            </FadeIn>
                        </dl>
                    </FadeInStagger>
                </div>
            </div>
            {/* Right Column without Background */}
            <div className="flex-1 p-8 flex justify-center items-center py-16 lg:py-32 w-full">
                <div className={"w-full"}>
                    {/* Future content goes here */}
                    <FadeInStagger faster>
                        <form action="#" method="POST" className="pb-16 pt-6 lg:px-8 lg:py-16 w-full">
                            <div className="mx-auto max-w-xl lg:max-w-lg w-full">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <FadeIn className="">
                                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-primary dark:text-primary-light">Voornaam</label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            className="w-full px-4 py-3 mt-1 text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-100 bg-gray-100 border-2 border-gray-100 dark:bg-gray-600 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Voornaam"
                                        />
                                    </FadeIn>
                                    
                                    <FadeIn>
                                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-primary dark:text-primary-light">Achternaam</label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            className="w-full px-4 py-3 mt-1 text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-100 bg-gray-100 border-2 border-gray-100 dark:bg-gray-600 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Achternaam"
                                        />
                                    </FadeIn>
                                    
                                    <FadeIn className={"sm:col-span-2"}>
                                        <label htmlFor="email" className="block text-sm/6 font-semibold text-primary dark:text-primary-light">E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="w-full px-4 py-3 mt-1 text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-100 bg-gray-100 border-2 border-gray-100 dark:bg-gray-600 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Jouw e-mail"
                                        />
                                    </FadeIn>
                                    
                                    <FadeIn className={"sm:col-span-2"}>
                                        <label htmlFor="phone" className="block text-sm/6 font-semibold text-primary dark:text-primary-light">Telefoon</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="w-full px-4 py-3 mt-1 text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-100 bg-gray-100 border-2 border-gray-100 dark:bg-gray-600 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Jouw telefoonnummer"
                                        />
                                    </FadeIn>
                                    
                                    <FadeIn className={"sm:col-span-2"}>
                                        <label htmlFor="message" className="block text-sm/6 font-semibold text-primary dark:text-primary-light">Bericht</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 mt-1 text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-100 bg-gray-100 border-2 border-gray-100 dark:bg-gray-600 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Jouw bericht"
                                        />
                                    </FadeIn>
                                </div>
                                <div className="mt-8 flex justify-end items-center">
                                    <FadeIn>
                                        <button
                                            type={"submit"}
                                            className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg shadow-md"
                                        >
                                            Verstuur
                                        </button>
                                    </FadeIn>
                                </div>
                            </div>
                        </form>
                    </FadeInStagger>
                </div>
            </div>
        </section>
    );
}
