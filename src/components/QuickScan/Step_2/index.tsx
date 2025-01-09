import React, {useState} from "react";

import {Field, Description, Switch, Label, Input, Textarea, Transition} from "@headlessui/react";

interface Step2Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


const Step_2: React.FC<Step2Props> = ({formData, setFormData}) => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div>
            <div className="progress py-4">
                <h2 className={"text-dark-primary"}>Stap 2 van 3</h2>
                <h2 className={"font-bold"}>Welke uitdagingen ervaart je bedrijf op dit moment?</h2>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Beschrijf de grootste uitdaging</label>
                <textarea
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Bijvoorbeeld: Het automatiseren van processen."
                ></textarea>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Welke tools gebruik je nu?</label>
                <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Bijvoorbeeld: Excel, Trello"
                />
            </div>
        </div>
    );
};

export default Step_2;
