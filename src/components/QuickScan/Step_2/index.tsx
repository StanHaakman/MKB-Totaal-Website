import React from "react";
import {Field, Label, Description, Transition, Textarea} from "@headlessui/react";
import {QuickScanFormData} from "../index.tsx";
import SimpleSwitch from "../SimpleSwitch";
import {FadeIn, FadeInStagger} from "../../FadeIn.tsx";

interface Step_2Props {
    formData: QuickScanFormData;
    setFormData: React.Dispatch<React.SetStateAction<QuickScanFormData>>;
}

const Step_2: React.FC<Step_2Props> = ({formData, setFormData}) => {
    const [valueAddedEnabled, setValueAddedEnabled] = React.useState(false);

    const [projectAdministrationEnabled, setProjectAdministrationEnabled] = React.useState(false);
    const [employeeHoursEnabled, setEmployeeHoursEnabled] = React.useState(false);
    const [purchaseTrackingEnabled, setPurchaseTrackingEnabled] = React.useState(false);

    const [invoiceScanningEnabled, setInvoiceScanningEnabled] = React.useState(false);


    const [inventoryEnabled, setInventoryEnabled] = React.useState(false);

    const [multipleWarehousesEnabled, setMultipleWarehousesEnabled] = React.useState(false);
    const [fixedLocationEnabled, setFixedLocationEnabled] = React.useState(false);
    const [articleNumberingEnabled, setArticleNumberingEnabled] = React.useState(false);

    return (
        <FadeInStagger faster>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 2 van 3</h2>
                <h2 className={"font-bold"}>Uw bedrijfsprocessen in detail</h2>
                <p className={"text-xs text-gray-600"}>Deze stap gaat in op de details van waarde toevoeging,
                    voorraadbeheer, en dienstverlening.</p>
            </div>
            <FadeIn className="mb-4 relative">
                <Field className="flex items-center justify-between pr-2 flex-wrap">
                    <span className="flex grow flex-col py-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Voegt uw bedrijf waarde toe aan het product?
                        </Label>
                        <Description className="block text-sm font-medium sr-only">
                            Value Added
                        </Description>
                    </span>

                    <SimpleSwitch checked={valueAddedEnabled} onChange={setValueAddedEnabled} name={"valueAdded"}/>

                    <Transition
                        show={valueAddedEnabled}
                        enter="transition-all duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <div className={"py-3 grow"}>
                            <FadeInStagger faster>
                                <FadeIn>
                                    <Field
                                        className={"flex item-center justify-between pl-4 gap-x-3"}
                                    >
                                        <Label
                                            className={"text-xs font-semibold text-gray-900 grow"}
                                        >
                                            Maakt uw bedrijf gebruik van order/project administratie?
                                        </Label>

                                        <span className={"shrink"}>
                                            <SimpleSwitch checked={projectAdministrationEnabled}
                                                          onChange={setProjectAdministrationEnabled}
                                                          name={"projectAdministration"}/>
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
                                            Schrijven de productie medewerkers uren?
                                        </Label>

                                        <span className={"shrink"}>
                                            <SimpleSwitch checked={employeeHoursEnabled}
                                                          onChange={setEmployeeHoursEnabled} name={"employeeHours"}/>
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
                                            Worden inkopen op het project/de order geregistreerd?
                                        </Label>

                                        <SimpleSwitch checked={purchaseTrackingEnabled}
                                                      onChange={setPurchaseTrackingEnabled} name={"purchaseTracking"}/>
                                    </Field>
                                </FadeIn>
                            </FadeInStagger>
                        </div>

                    </Transition>

                </Field>
            </FadeIn>
            <FadeIn className="mb-4 relative">

                <FadeInStagger>

                    <FadeIn>
                        <Field>
                            <Label
                                className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                            >
                                Factuurverwerking
                            </Label>

                            <Textarea
                                className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                                rows={4}
                                name={"invoiceProcessing"}
                                placeholder={"Hoe worden facturen verwerkt?"}
                                value={formData.invoiceProcessing}
                                onChange={(e) =>
                                    setFormData({...formData, invoiceProcessing: e.target.value})
                                }
                            />
                        </Field>
                    </FadeIn>

                    <FadeIn>
                        <Field className="flex items-center justify-between pr-2">
                            <span className="flex grow flex-col py-2">
                                <Label className="text-sm font-semibold text-gray-900">
                                    Wordt er gebruik gemaakt van software om de factuur uit te lezen middels scan en herken?
                                </Label>
                                <Description className="block text-sm font-medium sr-only">
                                    invoiceScanning
                                </Description>
                            </span>

                            <SimpleSwitch checked={invoiceScanningEnabled} onChange={setInvoiceScanningEnabled}
                                          name={"invoiceScanning"}/>
                        </Field>
                    </FadeIn>

                </FadeInStagger>

            </FadeIn>
            <FadeIn className="mb-4 relative">
                <Field className={"flex items-center justify-between pr-2 flex-wrap"}>
                <span className="flex grow flex-col py-2">
                    <Label className="text-sm font-semibold text-gray-900">
                        Heeft uw bedrijf voorraden?
                    </Label>
                    <Description className="block text-sm font-medium sr-only">
                        Inventory
                    </Description>
                </span>
                    <SimpleSwitch checked={inventoryEnabled} onChange={setInventoryEnabled} name={"inventory"}/>

                    <Transition
                        show={inventoryEnabled}
                        enter="transition-all duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <div className={"py-3 grow"}>
                            <FadeInStagger faster>
                                <FadeIn>
                                    <Field
                                        className={"flex item-center justify-between pl-4 gap-x-3"}
                                    >
                                        <Label
                                            className={"text-xs font-semibold text-gray-900 grow"}
                                        >
                                            Is er sprake van meerdere magazijnen?
                                        </Label>

                                        <span className={"shrink"}>
                                        <SimpleSwitch checked={multipleWarehousesEnabled}
                                                      onChange={setMultipleWarehousesEnabled}
                                                      name={"multipleWarehouses"}/>
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
                                            Worden goederen op een vaste locatie opgeslagen?
                                        </Label>

                                        <span className={"shrink"}>
                                        <SimpleSwitch checked={fixedLocationEnabled} onChange={setFixedLocationEnabled}
                                                      name={"fixedLocation"}/>
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
                                            Wordt er gebruik gemaakt van artikelnummering?
                                        </Label>

                                        <SimpleSwitch checked={articleNumberingEnabled}
                                                      onChange={setArticleNumberingEnabled} name={"articleNumbering"}/>
                                    </Field>
                                </FadeIn>
                            </FadeInStagger>
                        </div>

                    </Transition>
                </Field>
            </FadeIn>
            <FadeIn className="mb-4 relative">
            </FadeIn>
        </FadeInStagger>
    );
};

export default Step_2;