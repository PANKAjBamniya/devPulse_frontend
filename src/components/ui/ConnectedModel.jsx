import { platformMeta } from "../../utils/platformConfig";

const ConnectedModel = ({
    platformKey,
    onClose,
}) => {
    const data = platformMeta[platformKey];


    if (!data) return null;

    const {
        name,
        description,
        color,
        icon: Icon,
        authType,
        authUrl,
    } = data;

    const handleContinue = () => {
        if (authType === "oauth" && typeof authUrl === "function") {
            window.location.href = authUrl();
            return;
        }

        onClose();
    };

    return (
        <div className="space-y-6 text-center">
            {/* Icon */}
            <div
                className="w-20 h-20 mx-auto rounded-2xl center"
                style={{ backgroundColor: `${color}20`, color }}
            >
                <Icon size={36} />
            </div>

            {/* Title */}
            <div>
                <h2 className="text-2xl font-semibold">
                    Connect {name}
                </h2>
                <p className="text-secondary text-sm mt-1">
                    {description}
                </p>
            </div>

            {/* Action */}
            <button
                onClick={handleContinue}
                style={{
                    background: `linear-gradient(135deg, ${color}, ${color}CC)`,
                }}
                className="
                    w-full py-3 rounded-xl font-semibold text-white
                    shadow-lg hover:shadow-xl transition
                "
            >
                Continue with {name}
            </button>

            {/* Cancel */}
            <button
                onClick={onClose}
                className="w-full text-xs text-muted hover:underline"
            >
                Cancel
            </button>
        </div>
    );
};

export default ConnectedModel;
