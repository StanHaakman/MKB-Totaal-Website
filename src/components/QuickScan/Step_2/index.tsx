import React from "react";
import {Field, Label, Description, Transition} from "@headlessui/react";
import { QuickScanFormData } from "../index.tsx";
import SimpleSwitch from "../SimpleSwitch";
import {FadeIn, FadeInStagger} from "../../FadeIn.tsx";

interface Step_2Props {
    formData: QuickScanFormData;
    setFormData: React.Dispatch<React.SetStateAction<QuickScanFormData>>;
}

const Step_2: React.FC<Step_2Props> = () => {
    const [valueAddedEnabled, setValueAddedEnabled] = React.useState(false);

    const [projectAdministrationEnabled, setProjectAdministrationEnabled] = React.useState(false);
    const [employeeHoursEnabled, setEmployeeHoursEnabled] = React.useState(false);
    const [purchaseTrackingEnabled, setPurchaseTrackingEnabled] = React.useState(false);

    return (
        <div>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 2 van 3</h2>
                <h2 className={"font-bold"}>Uw bedrijfsprocessen in detail</h2>
                <p className={"text-xs text-gray-600"}>Deze stap gaat in op de details van waarde toevoeging, voorraadbeheer, en dienstverlening.</p>
            </div>
            <div className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Voegt uw bedrijf waarde toe aan het product?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            Value Added
                        </Description>
                    </span>

                    <SimpleSwitch checked={valueAddedEnabled} onChange={setValueAddedEnabled} name={"valueAdded"} />

                    <Transition
                        show={valueAddedEnabled}
                        enter="transition-all duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <div className={"py-3"}>
                            <FadeInStagger faster>
                                <FadeIn>
                                    <Field
                                        className={"flex item-center justify-between pl-4 gap-x-3"}
                                    >
                                        <Label
                                            className={"text-xs font-semibold text-gray-900 grow"}
                                        >
                                            Maakt uw bedrijf gebruik van order/project administratie? (Ja/Nee)
                                        </Label>

                                        <span className={"shrink"}>
                                            <SimpleSwitch checked={projectAdministrationEnabled} onChange={setProjectAdministrationEnabled} name={"projectAdministration"}/>
                                        </span>
                                    </Field>
                                </FadeIn>

                                <FadeIn>
                                    <Field
                                        className={"flex item-center justify-between pl-4 gap-x-3"}
                                    >
                                        <Label
                                            className={"text-xs font-semibold text-gray-900 grow"}
                                        >
                                            Schrijven de productie medewerkers uren? (Ja/Nee)
                                        </Label>

                                        <span className={"shrink"}>
                                            <SimpleSwitch checked={employeeHoursEnabled} onChange={setEmployeeHoursEnabled} name={"employeeHours"}/>
                                        </span>
                                    </Field>
                                </FadeIn>
                                <FadeIn>
                                    <Field
                                        className={"flex item-center justify-between pl-4 gap-x-3"}
                                    >
                                        <Label
                                            className={"text-xs font-semibold text-gray-900 grow"}
                                        >
                                            Worden inkopen op het project/de order geregistreerd? (Ja/Nee)
                                        </Label>

                                        <SimpleSwitch checked={purchaseTrackingEnabled} onChange={setPurchaseTrackingEnabled}  name={"purchaseTracking"}/>
                                    </Field>
                                </FadeIn>
                            </FadeInStagger>
                        </div>

                    </Transition>

                </Field>
            </div>
            <div className="mb-4 relative">
            </div>
            <div className="mb-4 relative">
            </div>
            <div className="mb-4 relative">
            </div>
        </div>
    );
};

export default Step_2;