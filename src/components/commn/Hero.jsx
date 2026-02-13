import { useState } from "react"
import hero from "../../assets/hero.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Hero = () => {
    const [selectedPlatforms, setSelectedPlatforms] = useState([])

    const platforms = [
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            color: "from-blue-600 to-blue-700",
            hoverColor: "hover:border-blue-500",
            textColor: "text-blue-400"
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            color: "from-sky-500 to-sky-600",
            hoverColor: "hover:border-sky-400",
            textColor: "text-sky-400"
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:border-blue-400",
            textColor: "text-blue-300"
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            color: "from-pink-500 via-purple-500 to-orange-500",
            hoverColor: "hover:border-pink-400",
            textColor: "text-pink-400"
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            color: "from-red-600 to-red-700",
            hoverColor: "hover:border-red-500",
            textColor: "text-red-400"
        }
    ]



    return (
        <div className="p-6">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800">

                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url(${hero})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm" />

                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
                </div>

                <span className="absolute top-5 right-5 flex items-center gap-2 text-green-400 text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ACTIVE
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-6 py-12">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-xs text-gray-300 tracking-wide uppercase font-medium">
                            AI-Powered Automation
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mt-2 leading-tight max-w-4xl">
                        Automate Your Presence on
                        <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Every Platform
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
                        Connect your social accounts once. Our AI handles scheduling,
                        posting, and timing across all platforms so you stay consistent
                        without the daily grind.
                    </p>

                    {/* Platform Selection Cards */}
                    <div className="mt-12 mb-8">
                        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide font-medium">
                            Select Your Platforms
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center max-w-3xl">
                            {platforms.map((platform) => {
                                const Icon = platform.icon
                                const isSelected = selectedPlatforms.includes(platform.name)

                                return (
                                    <button
                                        key={platform.name}
                                        className={`
                                            group relative flex items-center gap-3 px-6 py-4 rounded-xl
                                            bg-black/40 backdrop-blur-md border-2 
                                            transition-all duration-300 transform
                                            ${isSelected
                                                ? `border-transparent bg-gradient-to-br ${platform.color} shadow-lg shadow-${platform.name.toLowerCase()}/20 scale-105`
                                                : `border-zinc-700/50 ${platform.hoverColor} hover:scale-105 hover:bg-black/60`
                                            }
                                        `}
                                    >
                                        <Icon
                                            className={`w-5 h-5 transition-colors ${isSelected ? 'text-white' : platform.textColor
                                                }`}
                                        />
                                        <span className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-gray-300'
                                            }`}>
                                            {platform.name}
                                        </span>

                                        {/* Checkmark */}
                                        {isSelected && (
                                            <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                                                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                            <span className="relative z-10">Get Started Free</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            Watch Demo
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex items-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Setup in 2 minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero