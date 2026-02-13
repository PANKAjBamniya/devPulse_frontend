import hero from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className="p-6">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url(${hero})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                {/* Status Badge */}
                <span className="absolute top-5 right-5 text-green-400 text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                    ● ACTIVE
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-6">

                    <p className="text-sm text-gray-300 tracking-wide uppercase">
                        Automate your LinkedIn posts
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        Post Consistently on <span className="text-blue-500">Social Accounts</span> 🚀
                    </h1>

                    <p className="text-gray-400 mt-4 max-w-xl">
                        Set your schedule once — our AI handles posting,
                        timing, and consistency so you can focus on growth.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
