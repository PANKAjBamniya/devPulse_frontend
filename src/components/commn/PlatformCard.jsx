import {
    FiCheckCircle,
    FiXCircle,
    FiTrash2,
    FiClock
} from "react-icons/fi";


const PlatformCard = ({
    name,
    icon: Icon,
    color,
    connected = false,
    user,
    stats = [],
    hasSchedule = false,
    scheduleTime,
    scheduleData,
    onConnect,
    onDisconnect,
    onSchedule
}) => {

    const styles = {
        iconBg: { backgroundColor: `${color}20`, color },
        avatarBg: { backgroundColor: color },
        buttonBg: {
            background: `linear-gradient(135deg, ${color}, ${color}CC)`,
        },
        glow: { boxShadow: `0 12px 40px ${color}20` },
    };



    return (
        <div
            className="
                rounded-2xl p-6 space-y-6
                bg-[#111827]
                border border-zinc-800
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
            "
            style={styles.glow}
        >

            {/* Header */}
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={styles.iconBg}
                    >
                        <Icon size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold text-base">{name}</h3>

                        {connected ? (
                            <span className="flex items-center gap-1 text-green-400 text-xs mt-1">
                                <FiCheckCircle size={14} />
                                Connected
                            </span>
                        ) : (
                            <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                                <FiXCircle size={14} />
                                Not Connected
                            </span>
                        )}
                    </div>
                </div>

            </div>

            {/* Connected User Info */}
            {connected && user && (
                <div className="bg-zinc-900/60 rounded-xl p-4 space-y-4 border border-zinc-800">

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            {user.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center text-white font-semibold"
                                    style={styles.avatarBg}
                                >
                                    {user.name?.[0] || "U"}
                                </div>
                            )}
                        </div>

                        <div>
                            <p className="text-sm font-medium">
                                {user.name}
                            </p>

                            {/* Schedule Badge */}
                            {hasSchedule && (
                                <div className="flex items-center gap-1 text-blue-400 text-xs mt-1">
                                    <FiClock size={12} />
                                    Scheduled at {scheduleTime}
                                    <span className="ml-2 text-zinc-400">
                                        ({scheduleData?.frequency})
                                    </span>
                                </div>
                            )}

                        </div>
                    </div>

                    {stats?.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 text-center">
                            {stats.map((item, idx) => (
                                <div key={idx}>
                                    <p className="text-sm font-semibold">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Action Section */}
            {!connected ? (
                <button
                    onClick={onConnect}
                    style={styles.buttonBg}
                    className="
                        w-full py-3 rounded-xl font-semibold text-white
                        shadow-lg hover:shadow-xl transition
                    "
                >
                    Connect {name}
                </button>
            ) : (
                <div className="flex gap-3">

                    {/* Schedule Button */}
                    <button
                        onClick={onSchedule}
                        className="
                            flex-1 py-3 rounded-xl font-semibold
                            bg-blue-600 hover:bg-blue-700
                            transition text-white
                        "
                    >
                        {hasSchedule ? "Update Schedule" : "Set Schedule"}
                    </button>

                    {/* Disconnect Button */}
                    <button
                        onClick={onDisconnect}
                        className="
                            px-4 rounded-xl
                            bg-red-500/15 text-red-400
                            hover:bg-red-500/25 transition
                            flex items-center justify-center
                        "
                    >
                        <FiTrash2 size={18} />
                    </button>
                </div>
            )}

        </div>
    );
};

export default PlatformCard;
