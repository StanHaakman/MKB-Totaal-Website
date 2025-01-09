const Step_3 = () => {
    return (
        <div className="border p-4 rounded bg-white">
            <h2 className="text-lg font-bold mb-4">Stap 3: Toekomstige Doelen</h2>
            <p>Wat zijn de doelen van je bedrijf op korte en lange termijn?</p>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Korte termijn doelen</label>
                <textarea
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Bijvoorbeeld: Verbeteren van klanttevredenheid."
                ></textarea>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Lange termijn doelen</label>
                <textarea
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Bijvoorbeeld: Groei naar 50 medewerkers."
                ></textarea>
            </div>
        </div>
    );
};

export default Step_3;
