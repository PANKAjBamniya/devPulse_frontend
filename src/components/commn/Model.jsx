const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div className="relative z-10 w-full max-w-md mx-4 bg-card border border-default rounded-2xl p-6 animate-fadeIn">
                {children}
            </div>
        </div>
    );
};

export default Modal;
