import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/commn/Header";
import Schedule from "../../components/ui/Schedule";
import { useGetMyScheduleQuery } from "../../feature/api/scheduleApi";
import { useMeQuery } from "../../feature/api/authApiSlice";
import { getCountdown, getNextPostDate } from "../../utils/scheduleHelpers";
import Loader from "../../components/commn/Loader";
import Hero from "../../components/commn/Hero";
import AllPost from "../../components/ui/AllPost";


const Home = () => {
    const navigate = useNavigate();
    const [schedulePage, setSchedulePage] = useState(false);

    const user = useSelector((state) => state.auth.user);
    const token = localStorage.getItem("token");

    // 🔐 Get logged-in user (RTK)
    const { isLoading: meLoading } = useMeQuery(undefined, {
        skip: !token,
    });

    // 📅 Schedule
    const { data: scheduleRes, isLoading: scheduleLoading } =
        useGetMyScheduleQuery();
    const schedule = scheduleRes?.data;

    const nextPostDate = getNextPostDate(schedule);
    const countdown = getCountdown(nextPostDate);

    // 🔁 Redirect if not authenticated
    useEffect(() => {
        if (!token && !meLoading) {
            navigate("/login");
        }
    }, [token, meLoading]);

    if (meLoading || !user) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-app text-white pb-24">
            <Header user={user} />

            <Hero setSchedulePage={setSchedulePage} schedule={schedule} />

            <div className="px-4 mt-8 grid grid-cols-2 gap-5">
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <p className="text-xs text-gray-400 mb-2">NEXT POST</p>

                    <h4 className="font-semibold text-white">
                        {scheduleLoading || !nextPostDate
                            ? "—"
                            : nextPostDate.toLocaleString("en-IN", {
                                weekday: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                    </h4>

                    <p className="text-sm text-blue-400 mt-1">
                        {countdown ? `T-${countdown}` : "—"}
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400 tracking-wide">
                            ACTIVE CATEGORY
                        </p>

                        <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                            {schedule?.frequency || "—"}
                        </span>
                    </div>

                    <h4 className="font-semibold text-lg text-white">
                        {schedule?.categories?.map((c) => c.name).join(", ") ||
                            "—"}
                    </h4>

                    <p className="text-sm text-gray-400 line-clamp-3">
                        {schedule?.description || "No description provided"}
                    </p>

                    <div className="pt-2 border-t border-zinc-800 text-xs text-gray-500">
                        Timezone: {schedule?.timezone || "—"}
                    </div>
                </div>
            </div>

            <AllPost />

            {schedulePage && (
                <Schedule setSchedulePage={setSchedulePage} />
            )}
        </div>
    );
};

export default Home;
