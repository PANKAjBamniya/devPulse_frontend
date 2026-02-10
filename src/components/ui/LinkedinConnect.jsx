import logo from "../../assets/logo.png";
import { LiaLinkedinIn } from "react-icons/lia";

const LinkedinConnect = ({ onClose }) => {

    const handleLogin = () => {
        const params = new URLSearchParams({
            response_type: "code",
            client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
            redirect_uri: "http://localhost:3000/api/linkedin/callback",
            scope: "openid profile email w_member_social",
        });

        window.location.href =
            `https://www.linkedin.com/oauth/v2/authorization?${params}`;
    };

    return (
        <div className="text-center space-y-5">

            <img src={logo} alt="DevPulse" className="w-24 mx-auto rounded" />

            <h2 className="text-2xl font-bold">
                Connect LinkedIn
            </h2>

            <p className="text-secondary text-sm leading-relaxed">
                Connect your LinkedIn account to start
                auto-posting and tracking analytics.
            </p>

            <button
                onClick={handleLogin}
                className="btn-primary w-full flex items-center justify-center gap-3 py-3"
            >
                <LiaLinkedinIn className="text-3xl" />
                Continue with LinkedIn
            </button>

            <button
                onClick={onClose}
                className="text-xs text-muted hover:underline w-full"
            >
                Cancel
            </button>
        </div>
    );
};

export default LinkedinConnect;
