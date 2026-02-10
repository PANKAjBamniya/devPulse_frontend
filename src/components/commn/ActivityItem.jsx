
const ActivityItem = ({ icon, title, time }) => (
    <div className="flex gap-3 py-3 border-b border-default last:border-none">
        <div className="w-10 h-10 rounded-xl bg-card-hover center">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted">{time}</p>
        </div>
    </div>
);

export default ActivityItem