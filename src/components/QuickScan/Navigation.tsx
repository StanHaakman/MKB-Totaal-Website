import React from "react";
import clsx from "clsx";
import { CheckIcon } from "@heroicons/react/20/solid";

interface NavigationProps {
    steps: { name: string }[];
    activeIndex: number;
    onStepClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ steps, activeIndex, onStepClick }) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center justify-center mb-2">
                {steps.map((step, index) => (
                    <li
                        key={step.name}
                        className={clsx(
                            index !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
                            "relative"
                        )}
                    >
                        {index < activeIndex ? (
                            <>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 flex items-center"
                                >
                                    <div className="h-0.5 w-full bg-primary-light" />
                                </div>
                                <button
                                    onClick={() => onStepClick(index)}
                                    className="relative flex h-8 w-8 p-0 items-center justify-center rounded-full bg-primary-light"
                                >
                                    <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
                                    <span className="sr-only">{step.name}</span>
                                </button>
                            </>
                        ) : index === activeIndex ? (
                            <>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 flex items-center"
                                >
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <button
                                    onClick={() => onStepClick(index)}
                                    className="relative flex h-8 w-8 p-0 items-center justify-center rounded-full border-2 border-primary-light bg-white"
                                >
                  <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-primary-light"
                  />
                                    <span className="sr-only">{step.name}</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 flex items-center"
                                >
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <button
                                    onClick={() => onStepClick(index)}
                                    className="group relative flex h-8 w-8 p-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                                >
                  <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  />
                                    <span className="sr-only">{step.name}</span>
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Navigation;
