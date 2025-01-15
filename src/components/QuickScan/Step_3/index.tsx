import {QuickScanFormData} from "../index.tsx";
import {Field, Input, Label, Textarea} from "@headlessui/react";

interface Step_3Props {
    formData: QuickScanFormData;
    setFormData: React.Dispatch<React.SetStateAction<QuickScanFormData>>;
}

const Step_3: React.FC<Step_3Props> = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 3 van 3</h2>
                <h2 className={"font-bold"}>Laat uw contactgegevens achter</h2>
                <p className={"text-xs text-gray-600"}>Wij nemen graag contact met u op; laat uw bedrijfsgegevens achter.</p>
            </div>
            <div className="mt-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Bedrijfsnaam
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="Uw bedrijfsnaam"
                        name={"companyName"}
                        value={formData.companyName}
                        onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mt-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Naam
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="John Doe / Jane Doe"
                        name={"contactName"}
                        value={formData.contactName}
                        onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mt-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Contact email
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="voorbeeld@bedrijf.nl"
                        name={"contactEmail"}
                        value={formData.contactEmail}
                        onChange={(e) =>
                            setFormData({ ...formData, contactEmail: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mt-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Telefoonnummer
                    </Label>
                    <Input
                        type="text"
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs"
                        placeholder="06 12345678"
                        name={"contactPhone"}
                        value={formData.contactPhone}
                        onChange={(e) =>
                            setFormData({ ...formData, contactPhone: e.target.value })
                        }
                    />
                </Field>
            </div>
            <div className="mt-4 relative">
                <Field>
                    <Label
                        className={"absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-bold text-gray-900 z-10"}
                    >
                        Extra informatie
                    </Label>
                    <Textarea
                        className="w-full p-2 pt-4 border-2 rounded-md relative text-xs resize-none"
                        placeholder="Heeft u nog extra informatie die u met ons wilt delen?"
                        rows={6}
                        name={"extraInfo"}
                        value={formData.extraInfo}
                        onChange={(e) =>
                            setFormData({ ...formData, extraInfo: e.target.value })
                        }
                    />
                </Field>
            </div>
        </div>
    );
};

export default Step_3;
