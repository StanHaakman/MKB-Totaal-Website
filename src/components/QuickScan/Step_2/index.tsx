import React from "react";
import { Field, Label, Input, Textarea } from "@headlessui/react";
import { QuickScanFormData } from "../index.tsx";

interface Step_2Props {
    formData: QuickScanFormData;
    setFormData: React.Dispatch<React.SetStateAction<QuickScanFormData>>;
}

const Step_2: React.FC<Step_2Props> = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 2 van 3</h2>
                <h2 className={"font-bold"}>Detailvragen</h2>
            </div>
            <div className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Boekhoudsoftware
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Welke boekhoudsoftware gebruikt u?"
                        name={"accountingSoftware"}
                        value={formData.accountingSoftware}
                        onChange={(e) =>
                            setFormData({ ...formData, accountingSoftware: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Interne of externe administratie
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Is uw administratie intern of extern?"
                        name={"internalOrExternalAdmin"}
                        value={formData.internalOrExternalAdmin}
                        onChange={(e) =>
                            setFormData({ ...formData, internalOrExternalAdmin: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Rapportagesoftware
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Welke rapportagesoftware gebruikt u?"
                        name={"reportingSoftware"}
                        value={formData.reportingSoftware}
                        onChange={(e) =>
                            setFormData({ ...formData, reportingSoftware: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mb-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Toegevoegde waarde
                    </Label>
                    <Textarea
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        rows={6}
                        name={"valueAdded"}
                        placeholder="Wat is de toegevoegde waarde van uw bedrijf?"
                        value={formData.valueAdded}
                        onChange={(e) =>
                            setFormData({ ...formData, valueAdded: e.target.value })
                        }
                    />
                </Field>
            </div>
        </div>
    );
};

export default Step_2;