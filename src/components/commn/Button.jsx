const Button = ({
    children,
    loading = false,
    type = "submit",
    variant = "primary",
    className = "",
    disabled = false,
    onClick,
    ...props
}) => {
    const baseStyles =
        "w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f172a] " +
        "disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-gradient-to-r from-emerald-500 to-teal-500 " +
            "hover:from-emerald-600 hover:to-teal-600 text-white " +
            "shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 " +
            "focus:ring-emerald-500",

        secondary:
            "bg-white/10 hover:bg-white/20 text-white " +
            "border border-white/10 focus:ring-white/50",

        outline:
            "bg-transparent border-2 border-emerald-500 text-emerald-400 " +
            "hover:bg-emerald-500/10 focus:ring-emerald-500",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            aria-busy={loading}
            aria-disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="flex items-center justify-center gap-2 min-h-[1.25rem]">
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Loading…</span>
                    </>
                ) : (
                    children
                )}
            </span>
        </button>
    );
};

export default Button;
