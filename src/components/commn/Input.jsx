const Input = ({
    label,
    type = "text",
    placeholder,
    error,
    register,
    name,
}) => {
    return (
        <div className="mb-5">
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={`
          w-full px-4 py-3 rounded-lg
          bg-[#020617]/60 text-white placeholder-gray-500
          border transition-all
          focus:outline-none focus:ring-2 focus:ring-emerald-500/40
          ${error
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-white/10 focus:border-emerald-500"}
        `}
            />

            {error && (
                <p className="text-xs text-red-400 mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
