import {
    FiCheckCircle,
    FiXCircle,
    FiTrash2,
} from "react-icons/fi";

const PlatformCard = ({
    name,
    icon: Icon,
    color,
    connected = false,
    user,
    stats = [],
    onConnect,
    onDisconnect,
}) => {
    const styles = {
        iconBg: { backgroundColor: `${color}20`, color },
        avatarBg: { backgroundColor: color },
        buttonBg: {
            background: `linear-gradient(135deg, ${color}, ${color}CC)`,
        },
        glow: { boxShadow: `0 12px 40px ${color}25` },
    };

    return (
        <div
            className="
                relative rounded-2xl p-5 space-y-4
                bg-card/70 backdrop-blur-xl
                border border-default
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
            "
            style={styles.glow}
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <div
                    className="w-12 h-12 rounded-xl center"
                    style={styles.iconBg}
                >
                    <Icon size={22} />
                </div>

                <div>
                    <h3 className="font-semibold">{name}</h3>

                    {connected ? (
                        <span className="badge-success flex items-center gap-1 mt-1">
                            <FiCheckCircle size={14} /> Connected
                        </span>
                    ) : (
                        <span className="badge-error flex items-center gap-1 mt-1">
                            <FiXCircle size={14} /> Not Connected
                        </span>
                    )}
                </div>
            </div>

            {/* Connected User Info */}
            {connected && user && (
                <div className="bg-card-hover rounded-xl p-4 space-y-3">
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
                                    className="w-full h-full center text-white font-semibold"
                                    style={styles.avatarBg}
                                >
                                    {user.name?.[0] || "U"}
                                </div>
                            )}
                        </div>

                        <p className="text-sm font-medium">{user.name}</p>
                    </div>

                    {stats?.length > 0 && (
                        <div className="grid grid-flow-col auto-cols-fr gap-3 pt-3 border-t border-default text-center">
                            {stats.map((item, idx) => (
                                <div key={idx}>
                                    <p className="text-sm font-semibold">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-muted">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Actions */}
            {connected ? (
                <button
                    onClick={onDisconnect}
                    className="
                        w-full flex items-center justify-center gap-2
                        rounded-xl py-2.5 font-semibold
                        bg-red-500/15 text-red-400
                        hover:bg-red-500/25 transition
                    "
                >
                    <FiTrash2 /> Disconnect
                </button>
            ) : (
                <button
                    onClick={onConnect}
                    style={styles.buttonBg}
                    className="
                        w-full py-2.5 rounded-xl font-semibold text-white
                        shadow-lg hover:shadow-xl transition
                    "
                >
                    Connect with {name}
                </button>
            )}
        </div>
    );
};

export default PlatformCard;
