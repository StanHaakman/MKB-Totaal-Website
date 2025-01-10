import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";

import Step_0 from "./Step_0";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";
import Step_end from "./Step_end";
import Navigation from "./Navigation";

// FormData interface
interface FormData {
    companyDescription: string;
    employeeCount: string | number;
    erpUsageDescription: string;
    financialIntegrationDescription: string;
    accountingSoftware: string;
    internalOrExternalAdmin: string;
    reportingSoftware: string;
    valueAdded: string;
    projectAdministration: string;
    employeeHours: string;
    purchaseTracking: string;
    invoiceProcessing: string;
    inventory: string;
    multipleWarehouses: string;
    fixedLocationStorage: string;
    articleNumbering: string;
    onSiteService: string;
    technicianHours: string;
    technicianMaterials: string;
}


const QuickScan = () => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Steps array
    const steps = [
        { name: "Introductie", component: <Step_0 /> },
        { name: "Algemene vragen", component: <Step_1 /> },
        { name: "Detailvragen", component: <Step_2 /> },
        { name: "Bedankt", component: <Step_end /> },
    ];

    // Form state
    const [formData, setFormData] = useState<FormData>({
        companyDescription: "",
        employeeCount: "",
        erpUsageDescription: "",
        financialIntegrationDescription: "",
        accountingSoftware: "",
        internalOrExternalAdmin: "",
        reportingSoftware: "",
        valueAdded: "",
        projectAdministration: "",
        employeeHours: "",
        purchaseTracking: "",
        invoiceProcessing: "",
        inventory: "",
        multipleWarehouses: "",
        fixedLocationStorage: "",
        articleNumbering: "",
        onSiteService: "",
        technicianHours: "",
        technicianMaterials: ""
    });

    const nextStep = () => {
        if (swiperInstance) swiperInstance.slideNext();
    };

    const prevStep = () => {
        if (swiperInstance) swiperInstance.slidePrev();
    };

    const goToStep = (index: number) => {
        if (swiperInstance) swiperInstance.slideTo(index);
    };

    return (
        <div className="max-w-xl mx-auto p-4 min-h-[800px] flex flex-col justify-starts">
            <div>
                {/* Title */}
                <h1 className="text-xl font-bold text-primary text-center mb-6">
                    MKB-Totaal.com Quickscan
                </h1>

                {/* Navigation */}
                <Navigation steps={steps} activeIndex={activeIndex} onStepClick={goToStep} />
            </div>

            {/* Swiper */}
            <div className="grow max-h-[625px] overflow-y-scroll">
                <Swiper
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    allowTouchMove={false}
                    slidesPerView={1}
                    spaceBetween={50}
                >
                    {steps.map((step, index) => (
                        <SwiperSlide key={index}>
                            {React.cloneElement(step.component as React.ReactElement<any>, {
                                formData,
                                setFormData,
                            })}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    disabled={activeIndex === 0}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Vorige
                </button>
                {activeIndex < steps.length - 1 ? (
                    <button
                        onClick={nextStep}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors duration-200 cursor-pointer"
                    >
                        Volgende
                    </button>
                ) : (
                    <button
                        onClick={() => alert("Quickscan afgerond!")}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Afronden
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuickScan;
