import React, {useState} from "react";

import {Field, Description, Switch, Label, Input, Textarea, Transition} from "@headlessui/react";

interface Step1Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


const Step_1: React.FC<Step1Props> = ({formData, setFormData}) => {
    const [erpUsageEnabled, setErpUsageEnabled] = useState(false)
    const [financialIntegrationEnabled, setFinancialIntegrationEnabled] = useState(false)
    
    return (
        <div>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 1 van 3</h2>
                <h2 className={"font-bold"}>Vertel ons over uw bedrijf</h2>
            </div>
            <div className="mb-4 relative">
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
                        placeholder={"Welke producten maakt u?"}
                        value={formData.companyDescription}
                        onChange={(e) =>
                            setFormData({...formData, companyDescription: e.target.value})
                        }
                    />
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Aantal werknemers
                    </Label>
                    <Input
                        type="number"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Hoeveel mensen werken er bij uw bedrijf?"
                        name={"employeeCount"}
                        value={formData.employeeCount}
                        onChange={(e) =>
                            setFormData({...formData, employeeCount: e.target.value})
                        }
                    />
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2 pl-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Maakt u gebruik van een ERP-systeem?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            Erp-systeem
                        </Description>
                    </span>

                    <Switch
                        checked={erpUsageEnabled}
                        onChange={setErpUsageEnabled}
                        name={"erpUsage"}
                        className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 data-[checked]:bg-primary-light"
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            className={"pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"}>
                            <span aria-hidden={"true"}
                                  className={"absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"}>
                                  <svg fill="none" viewBox="0 0 12 12" className="size-3 text-gray-400">
                                    <path
                                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                  </svg>
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
                            >
                              <svg fill="currentColor" viewBox="0 0 12 12" className="size-3 text-primary-light">
                                <path
                                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                              </svg>
                            </span>
                        </span>
                    </Switch>

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
                            name={"erpDescription"}
                            placeholder={"Welk ERP-systeem gebruikt u?"}
                            value={formData.erpDescription}
                            onChange={(e) =>
                                setFormData({...formData, erpDescription: e.target.value})
                            }
                        />
                    </Transition>
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2 pl-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Heeft uw software een financiële integratie?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            financiële integratie
                        </Description>
                    </span>

                    <Switch
                        checked={financialIntegrationEnabled}
                        onChange={setFinancialIntegrationEnabled}
                        name={"financialIntegration"}
                        className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 data-[checked]:bg-primary-light"
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            className={"pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"}>
                            <span aria-hidden={"true"}
                                  className={"absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"}>
                                  <svg fill="none" viewBox="0 0 12 12" className="size-3 text-gray-400">
                                    <path
                                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                  </svg>
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
                            >
                              <svg fill="currentColor" viewBox="0 0 12 12" className="size-3 text-primary-light">
                                <path
                                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                              </svg>
                            </span>
                        </span>
                    </Switch>

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
                            placeholder={"Met welk boekhoudingssysteem werkt u?"}
                            value={formData.financialIntegrationDescription}
                            onChange={(e) =>
                                setFormData({...formData, financialIntegrationDescription: e.target.value})
                            }
                        />
                    </Transition>
                </Field>
            </div>
        </div>
    )
};

export default Step_1;
