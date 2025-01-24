import React, { useState } from "react";
import { Field, Description, Switch, Label, Input, Textarea, Transition } from "@headlessui/react";
import {QuickScanFormData} from "../index.tsx";
import SimpleSwitch from "../SimpleSwitch.tsx";
import {FadeIn, FadeInStagger} from "../../FadeIn.tsx";

interface Step_1Props {
    formData: QuickScanFormData;
    setFormData: React.Dispatch<React.SetStateAction<QuickScanFormData>>;
}

const Step_1: React.FC<Step_1Props> = ({ formData, setFormData }) => {
    const [erpUsageEnabled, setErpUsageEnabled] = useState(false);
    const [financialIntegrationEnabled, setFinancialIntegrationEnabled] = useState(false);
    const [administrationInHouseEnabled, setAdministrationInHouseEnabled] = useState(false);

    return (
        <FadeInStagger faster>
            <div className="progress pb-6">
                <h2 className={"text-dark-primary"}>Stap 1 van 3</h2>
                <h2 className={"font-bold"}>Vertel ons over uw bedrijf</h2>
                <p className={"text-xs text-gray-600"}>Deze stap verzamelt algemene informatie over het bedrijf en de
                    huidige processen.</p>
            </div>
            <FadeIn className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Bedrijfsomschrijving
                    </Label>
                    <Textarea
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        rows={6}
                        name={"companyDescription"}
                        placeholder={"Kunt u een omschrijving geven van het bedrijf? Welke producten maakt u?"}
                        value={formData.companyDescription}
                        onChange={(e) =>
                            setFormData({...formData, companyDescription: e.target.value})
                        }
                    />
                </Field>
            </FadeIn>
            <FadeIn className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Aantal werknemers
                    </Label>
                    <Input
                        type="number"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Hoeveel werknemers zijn er actief binnen uw bedrijf?"
                        min={0}
                        max={9999}
                        name={"employeeCount"}
                        value={formData.employeeCount}
                        onChange={(e) =>
                            setFormData({...formData, employeeCount: e.target.value})
                        }
                    />
                </Field>
            </FadeIn>


            <FadeIn className="mt-4 relative">
                <Field className="flex item-center justify-between pr-2 gap-x-3">
                    <span className="flex grow flex-col py-2 pl-2 items-center">
                        <Label className="text-sm font-semibold text-gray-900">
                            Wordt de administratie in huis gedaan of door een externe partij? (In huis / Externe partij)
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            Administratiebeheer
                        </Description>
                    </span>

                    <div className={"flex items-center"}>
                        <Switch
                            checked={administrationInHouseEnabled}
                            onChange={setAdministrationInHouseEnabled}
                            name={"administrationInHouse"}
                            className="group relative inline-flex h-10 w-20 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 data-[checked]:bg-primary-light"
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                className={"pointer-events-none relative inline-block size-9 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-10"}>
                                <span aria-hidden={"true"}
                                      className={"absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"}>
                                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                           className="size-5 text-gray-400">
                                          <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                                      </svg>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
                                >
                                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                       className="size-5 text-primary-light">
                                      <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                  </svg>
                                </span>
                            </span>
                        </Switch>
                    </div>
                </Field>
            </FadeIn>
            
            <FadeIn className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2 pl-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Maakt u gebruik van ERP-software?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            Erp-systeem
                        </Description>
                    </span>


                    <SimpleSwitch checked={erpUsageEnabled} onChange={setErpUsageEnabled} name={"erpUsage"}/>

                    <Transition
                        show={erpUsageEnabled}
                        enter="transition-all duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <Textarea
                            className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                            rows={6}
                            name={"erpUsageDescription"}
                            placeholder={"Welke ERP-software gebruikt u?"}
                            value={formData.erpUsageDescription}
                            onChange={(e) =>
                                setFormData({...formData, erpUsageDescription: e.target.value})
                            }
                        />
                    </Transition>
                </Field>
            </FadeIn>
            
            <FadeIn className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2 pl-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Is er een financiële integratie in uw software?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            financiële integratie
                        </Description>
                    </span>

                    <SimpleSwitch checked={financialIntegrationEnabled} onChange={setFinancialIntegrationEnabled} name={"financialIntegration"}/>

                    <Transition
                        show={financialIntegrationEnabled}
                        enter="transition-all duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <Textarea
                            className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                            rows={6}
                            name={"financialIntegrationDescription"}
                            placeholder={"Met welk boekhoudsysteem wordt er gewerkt?"}
                            value={formData.financialIntegrationDescription}
                            onChange={(e) =>
                                setFormData({...formData, financialIntegrationDescription: e.target.value})
                            }
                        />
                    </Transition>
                </Field>
            </FadeIn>
            
            <FadeIn className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Rapportagesoftware
                    </Label>
                    <Textarea
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        rows={3}
                        name={"reportingSoftware"}
                        placeholder={"Van welke software maakt u gebruik voor het maken van rapportages? (Bijvoorbeeld Excel of BI)"}
                        value={formData.reportingSoftware}
                        onChange={(e) =>
                            setFormData({...formData, reportingSoftware: e.target.value})
                        }
                    />
                </Field>
            </FadeIn>
        </FadeInStagger>
    );
};

export default Step_1;