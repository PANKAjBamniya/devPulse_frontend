import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import Input from "../../components/commn/Input";
import Button from "../../components/commn/Button";
import logo from "../../assets/logo.png";

import { useLoginMutation } from "../../feature/api/authApiSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await login(data).unwrap();

            localStorage.setItem("token", res.token);

            toast.success("Login successfully");
            navigate("/");
        } catch (err) {
            toast.error(err?.data?.message || "Login failed");
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-[#0f172a] to-[#1a1a2e]">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <img src={logo} alt="DevPulse" className="h-18 mx-auto mb-3 rounded" />
                    <p className="text-gray-400 text-sm">
                        Automate your social media presence with AI
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Welcome back
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Sign in to your account to continue
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                            name="email"
                            register={register}
                            error={errors.email?.message}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            name="password"
                            register={register}
                            error={errors.password?.message}
                        />

                        <Button loading={isSubmitting} type="submit">
                            Login
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="text-sm text-gray-400 text-center mt-6">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
