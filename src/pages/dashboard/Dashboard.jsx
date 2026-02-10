import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../../components/commn/SideBar";
import DashboardTopBar from "../../components/commn/DashTopBar";
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import StatCard from "../../components/commn/StatCard";
import PlatFormRow from "../../components/commn/PlatFormRow";
import ActivityItem from "../../components/commn/ActivityItem";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const [openCreate, setOpenCreate] = useState(false);

    return (
        <div className="flex-1 space-y-10">

            <DashboardTopBar onCreate={() => setOpenCreate(true)} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Impressions" value="127.3K" growth="+12.5%" />
                <StatCard title="Engagements" value="8,492" growth="+8.3%" />
                <StatCard title="Followers" value="42.8K" growth="+5.7%" />
                <StatCard title="Posts Published" value="23" subtitle="This month" />
            </div>

            <div className="card">
                <h3 className="text-lg font-semibold mb-4">Platform Performance</h3>

                <PlatFormRow icon={<FaLinkedin />} name="LinkedIn" value="3,842" percent={85} color="bg-blue-500" />
                <PlatFormRow icon={<FaTwitter />} name="Twitter" value="2,914" percent={65} color="bg-sky-500" />
                <PlatFormRow icon={<FaInstagram />} name="Instagram" value="1,236" percent={45} color="bg-pink-500" />
                <PlatFormRow icon={<FaFacebook />} name="Facebook" value="500" percent={28} color="bg-blue-700" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-2">Top Performing Post</h3>
                    <p className="text-secondary mb-4">
                        “5 essential tips for growing your LinkedIn presence in 2024…”
                    </p>

                    <div className="flex gap-6 text-sm text-muted">
                        <span>👍 1.2K Likes</span>
                        <span>💬 342 Comments</span>
                        <span>🔁 89 Shares</span>
                    </div>
                </div>

                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

                    <ActivityItem
                        icon={<FaLinkedin className="text-blue-400" />}
                        title="Post published on LinkedIn"
                        time="2 hours ago"
                    />
                    <ActivityItem
                        icon={<FaTwitter className="text-sky-400" />}
                        title="Scheduled Twitter post sent"
                        time="1 day ago"
                    />
                    <ActivityItem
                        icon={<FaInstagram className="text-pink-400" />}
                        title="Instagram engagement milestone"
                        time="5 hours ago"
                    />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;


