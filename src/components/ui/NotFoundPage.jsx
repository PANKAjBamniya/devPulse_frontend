import { useNavigate } from "react-router-dom";
import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-app center px-4">
            <div className=" max-w-md w-full text-center space-y-6">

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/10 center text-blue-400">
                    <FiAlertTriangle size={36} />
                </div>

                {/* Text */}
                <div>
                    <h1 className="text-3xl font-bold">
                        404 – Page Not Found
                    </h1>
                    <p className="text-secondary mt-2">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn-secondary flex items-center justify-center gap-2"
                    >
                        <FiArrowLeft /> Go Back
                    </button>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="btn-primary"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
