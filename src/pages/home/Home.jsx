import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/commn/Header";
import Schedule from "../../components/ui/Schedule";
import CategoryModel from "../../components/ui/CategoryModel";
import { useGetMyScheduleQuery } from "../../feature/api/scheduleApi";
import { getCountdown, getNextPostDate } from "../../utils/scheduleHelpers";
import Loader from "../../components/commn/Loader";
import Hero from "../../components/commn/Hero";

const Home = () => {

    const { data: scheduleRes, isLoading: scheduleLoading } = useGetMyScheduleQuery()
    const schedule = scheduleRes?.data

    const nextPostDate = getNextPostDate(schedule)
    const countdown = getCountdown(nextPostDate)

    const { user, loading, getUser } = useAuth();
    const [schedulePage, setSchedulePage] = useState(false)

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);

    if (loading) {
        return <Loader />;
    }



    return (
        <div className="min-h-screen bg-app text-white pb-24 ">
            {/*  HEADER  */}
            <Header user={user} />

            {/*  AUTOPILOT CARD  */}
            <Hero setSchedulePage={setSchedulePage} schedule={schedule} />


            {/* ---------- OVERVIEW ---------- */}
            <div className="px-4 mt-8 grid grid-cols-2 gap-5">
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <p className="text-xs text-gray-400 mb-2">NEXT POST</p>

                    <h4 className="font-semibold">
                        {scheduleLoading || !nextPostDate
                            ? "—"
                            : nextPostDate.toLocaleString("en-IN", {
                                weekday: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                    </h4>

                    <p className="text-sm text-blue-400 mt-1">
                        T-{countdown}
                    </p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <p className="text-xs text-gray-400 mb-2">ACTIVE CATEGORY</p>

                    <h4 className="font-semibold">
                        {schedule?.categories?.map((c) => c.name).join(", ") || "—"}
                    </h4>

                    <p className="text-xs text-gray-400 mt-1">
                        freq: {schedule?.frequency || "—"}
                    </p>
                    {/* <p className="text-xs text-gray-400 mt-1">
                        Des.: {schedule?.description || "..."}
                    </p> */}
                </div>

            </div>

            {/* ---------- PERFORMANCE ---------- */}
            <div className="px-4 mt-8">
                <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">WEEKLY PERFORMANCE</p>
                        <span className="text-green-400 text-sm">+12%</span>
                    </div>

                    <h2 className="text-3xl font-bold mt-2">
                        1,240 <span className="text-sm font-normal text-gray-400">impressions</span>
                    </h2>

                    {/* Fake chart placeholder */}
                    <div className="mt-4 h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg" />
                </div>
            </div>
            {schedulePage && <Schedule setSchedulePage={setSchedulePage} />}

        </div>
    );
};

export default Home;
