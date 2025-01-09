

interface ModalProps {
    isOpen: boolean;
    position?: "top" | "right" | "bottom" | "left" | "top-right" | "bottom-right" | "top-left" | "bottom-left" | "center";
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, position = "center", children, onClose }) => {
    if (!isOpen) return null;

    const positionClasses = {
        top: "top-2 left-1/2 transform -translate-x-1/2",
        right: "top-1/2 right-2 transform -translate-y-1/2",
        bottom: "bottom-2 left-1/2 transform -translate-x-1/2",
        left: "top-1/2 left-2 transform -translate-y-1/2",
        "top-right": "top-2 right-2",
        "bottom-right": "bottom-2 right-2",
        "top-left": "top-2 left-2",
        "bottom-left": "bottom-2 left-2",
        center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className={`absolute ${positionClasses[position]} bg-white p-6 rounded shadow-lg`}
            >
                {children}
                <button
                    onClick={onClose}
                    className="absolute z-50 top-2 right-2 text-primary border-primary border-2 text-2xl transition duration-200 py-1 px-3 rounded-full
                    hover:bg-primary hover:text-white"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Modal;
