import { useState } from "react";
import { useMeQuery } from "../../feature/api/authApiSlice";

import PlatformCard from "../../components/commn/PlatformCard";
import { platformConfig } from "../../utils/platformConfig";
import Modal from "../../components/commn/Model";
import ConnectedModel from "../../components/ui/ConnectedModel";
import Schedule from "../../components/ui/Schedule";
import { useGetMyAllSchedulesQuery } from "../../feature/api/scheduleApi";

const PlatForm = () => {
    const [activePlatform, setActivePlatform] = useState(null);
    const [activeSchedulePlatform, setActiveSchedulePlatform] = useState(null);

    const { data, isLoading } = useMeQuery();

    const connectedPlatforms = data?.connectedPlatforms || [];
    const socialAccounts = data?.socialAccounts || [];

    const isConnected = (platformKey) =>
        connectedPlatforms.includes(platformKey);

    const getPlatformAccount = (platformKey) =>
        socialAccounts.find((acc) => acc.platform === platformKey);


    const { data: schedulesRes } = useGetMyAllSchedulesQuery();

    const schedules = schedulesRes?.data || [];


    const scheduleForPlatform = schedules.find(
        (s) => s?.socialAccount?._id === activeSchedulePlatform
    );


    return (
        <>
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold">Platform Connections</h2>
                    <p className="text-secondary">
                        Manage your connected social platforms
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {platformConfig.map((platform) => {
                        const account = getPlatformAccount(platform.key);

                        const scheduleForPlatform = schedules.find(
                            (sch) => sch.socialAccount?._id === account?._id
                        );

                        return (
                            <PlatformCard
                                key={platform.key}
                                name={platform.name}
                                icon={platform.icon}
                                color={platform.color}
                                connected={isConnected(platform.key)}
                                user={
                                    account
                                        ? {
                                            name: account.displayName,
                                            avatar: account.profileImage,
                                        }
                                        : null
                                }
                                stats={
                                    account?.followerCount
                                        ? [
                                            {
                                                label: "Followers",
                                                value: account.followerCount,
                                            },
                                        ]
                                        : null
                                }


                                hasSchedule={!!scheduleForPlatform}
                                scheduleTime={scheduleForPlatform?.time}
                                scheduleData={scheduleForPlatform}

                                onConnect={() =>
                                    setActivePlatform(platform.key)
                                }
                                onDisconnect={() =>
                                    console.log("disconnect", platform.key)
                                }
                                onSchedule={() =>
                                    setActiveSchedulePlatform(account?._id)
                                }
                            />
                        );
                    })}
                </div>
            </div>

            <Modal open={!!activePlatform} onClose={() => setActivePlatform(null)}>
                {activePlatform && (
                    <ConnectedModel
                        platformKey={activePlatform}
                        onClose={() => setActivePlatform(null)}
                    />
                )}
            </Modal>

            <Modal
                open={!!activeSchedulePlatform}
                onClose={() => setActiveSchedulePlatform(null)}
            >
                {activeSchedulePlatform && (
                    <Schedule
                        scheduleData={scheduleForPlatform}
                        existingSchedule={scheduleForPlatform}
                        platformKey={activeSchedulePlatform}
                        setSchedulePage={() => setActiveSchedulePlatform(null)}
                    />
                )}
            </Modal>

        </>
    );
};

export default PlatForm;
