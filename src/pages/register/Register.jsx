import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import Input from "../../components/commn/Input";
import Button from "../../components/commn/Button";
import logo from "../../assets/logo.png";

import { useRegisterMutation } from "../../feature/api/authApiSlice";
import { toast } from "react-toastify";

// ✅ Validation schema (same style as login)
const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
    const navigate = useNavigate();
    const [registerUser] = useRegisterMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    // ✅ Same philosophy as login
    // ❌ NO dispatch(setCredentials)
    const onSubmit = async (data) => {
        try {
            await registerUser(data).unwrap();

            toast.success("Account created successfully");
            navigate("/login");
        } catch (err) {
            console.error("Register failed:", err);
            toast.error(err?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-[#0f172a] to-[#1a1a2e]">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <img src={logo} alt="AI Auto Post" className="h-18 mx-auto mb-3 rounded" />
                    <p className="text-gray-400 text-sm">
                        Automate your social media presence with AI
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Create your account
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Get started with AI Auto Post today
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            name="name"
                            register={register}
                            error={errors.name?.message}
                        />

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
                            Create Account
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-4 bg-[#0f172a]/60 text-gray-500">
                                or
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-sm text-gray-400 text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
