import Button from "../commn/Button";

const DashboardTopBar = ({ onCreate }) => {
    return (
        <div className="">
            {/* Left */}
            <div>
                <h1 className="text-2xl font-semibold text-white">
                    Welcome to Dashboard 👋
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                    Here’s what’s happening with your automation
                </p>
            </div>
        </div>
    );
};

export default DashboardTopBar;
