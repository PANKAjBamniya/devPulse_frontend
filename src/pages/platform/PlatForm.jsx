import { useState } from "react";
import { useMeQuery } from "../../feature/api/authApiSlice";

import PlatformCard from "../../components/commn/PlatformCard";
import { platformConfig } from "../../utils/platformConfig";
import Modal from "../../components/commn/Model";
import ConnectedModel from "../../components/ui/ConnectedModel";

const PlatForm = () => {
    const [activePlatform, setActivePlatform] = useState(null);

    const { data, isLoading } = useMeQuery();

    const connectedPlatforms = data?.connectedPlatforms || [];
    const socialAccounts = data?.socialAccounts || [];

    const isConnected = (platformKey) =>
        connectedPlatforms.includes(platformKey);

    const getPlatformAccount = (platformKey) =>
        socialAccounts.find((acc) => acc.platform === platformKey);

    if (isLoading) return null;

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
                                onConnect={() =>
                                    setActivePlatform(platform.key)
                                }
                                onDisconnect={() =>
                                    console.log("disconnect", platform.key)
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
        </>
    );
};

export default PlatForm;
