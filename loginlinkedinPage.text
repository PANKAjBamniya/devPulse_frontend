import { useEffect } from "react";
import logo from "../../assets/logo.png"
import { LiaLinkedinIn } from 'react-icons/lia'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Loader from "../../components/commn/Loader";


const Login = () => {

    const { user, loading } = useAuth();
    const navigate = useNavigate()

    const handleLogin = () => {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
            redirect_uri: 'http://localhost:3000/api/linkedin/callback',
            scope: 'openid profile email w_member_social'

        })

        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`
    }


    useEffect(() => {
        if (!loading && user) {
            navigate("/", { replace: true });
        }
    }, [user, loading, navigate]);



    if (loading) {
        return <Loader />
    }

    return (
        <main className="min-h-screen bg-app flex items-center justify-center px-4">
            <div className="w-full max-w-xs sm:max-w-sm text-center flex flex-col items-center">

                <div className="sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center">
                    <img src={logo} alt="DevPulse" className="w-32 rounded" />
                </div>

                <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-bold text-primary">
                    DevPulse
                </h1>

                <p className="mt-2 sm:mt-3 text-secondary text-sm sm:text-base leading-relaxed">
                    Automate your LinkedIn <br />
                    presence with AI
                </p>

                <button
                    onClick={handleLogin}
                    className="btn-primary mt-12 sm:mt-16 w-full flex items-center justify-center gap-3 py-3 sm:py-4"
                >
                    <LiaLinkedinIn className="text-3xl" />
                    Continue with LinkedIn
                </button>

                <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-secondary px-2">
                    By continuing, you agree to our{" "}
                    <span className="underline cursor-pointer">Terms of Service</span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
            </div>
        </main>
    )
}

export default Login