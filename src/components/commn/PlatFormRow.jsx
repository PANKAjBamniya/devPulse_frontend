const PlatFormRow = ({ icon, name, value, percent, color }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1 text-sm">
            <div className="flex items-center gap-2">
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
            </div>
            <span className="font-medium">{value}</span>
        </div>
        <div className="w-full bg-card rounded-full h-2">
            <div
                className={`${color} h-2 rounded-full`}
                style={{ width: `${percent}%` }}
            />
        </div>
    </div>
);

export default PlatFormRow