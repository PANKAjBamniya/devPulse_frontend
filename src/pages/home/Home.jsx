import { useSelector } from "react-redux";
import Header from "../../components/commn/Header";
import { useGetMyScheduleQuery } from "../../feature/api/scheduleApi";
import { getCountdown, getNextPostDate } from "../../utils/scheduleHelpers";
import Hero from "../../components/commn/Hero";



const Home = () => {

    const user = useSelector((state) => state.auth.user);

    // 📅 Schedule
    const { data: scheduleRes, isLoading: scheduleLoading } =
        useGetMyScheduleQuery();
    const schedule = scheduleRes?.data;

    const nextPostDate = getNextPostDate(schedule);
    const countdown = getCountdown(nextPostDate);

    return (
        <div className="min-h-screen bg-app text-white pb-24">
            <Header />
            <Hero schedule={schedule} />
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
        </div>
    );
};

export default Home;
