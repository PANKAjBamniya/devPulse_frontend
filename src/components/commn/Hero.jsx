import hero from "../../assets/hero.png"

const Hero = ({ schedule, setSchedulePage }) => {
    return (
        <div className="p-5">
            <div className="bg-gradient-to-br from-[#16202b] to-[#0f1722] rounded-2xl p-5 border border-zinc-800 relative overflow-hidden">

                {/* Status */}
                <span className="absolute top-4 z-1 right-4 text-green-400 text-xs flex items-center gap-1">
                    ● ACTIVE
                </span>

                {/* Image */}
                <div className="w-full h-80 rounded-xl mb-4 overflow-hidden bg-[#0b1220] border border-zinc-800">
                    <img
                        src={hero}
                        alt="LinkedIn Automation"
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>

                <p className="text-xs text-gray-400">
                    Automate your LinkedIn posts
                </p>

                <h2 className="text-xl font-semibold mt-2">
                    Post consistently on LinkedIn 🚀
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                    Set your schedule once — we’ll handle the rest
                </p>

                <div className="flex gap-3 mt-4">
                    <button
                        onClick={() => setSchedulePage(true)}
                        className="bg-blue-600 px-5 py-3 rounded-lg text-sm font-medium"
                    >
                        {schedule ? "Update Schedule" : "Create Schedule"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero