const StatCard = ({ title, value, growth, subtitle }) => (
    <div className="card bg-card-hover">
        <p className="text-xs text-secondary mb-1">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
        {growth ? (
            <span className="badge-success mt-2 inline-block">{growth}</span>
        ) : (
            <p className="text-xs text-muted mt-1">{subtitle}</p>
        )}
    </div>
);
export default StatCard