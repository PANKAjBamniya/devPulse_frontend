import React, { useState, useMemo } from "react";
import { useGetMyAllPostQuery } from "../../feature/api/scheduleApi";

const Post = () => {
    const { data: myPost, isLoading, isError } = useGetMyAllPostQuery();
    const [activePlatform, setActivePlatform] = useState("All");

    const posts = myPost?.data || [];

    // 🔹 Filter posts by platform
    const filteredPosts = useMemo(() => {
        if (activePlatform === "All") return posts;
        return posts.filter(
            (post) =>
                post.platform?.toLowerCase() === activePlatform.toLowerCase()
        );
    }, [posts, activePlatform]);

    if (isLoading) return <div className="p-6">Loading...</div>;
    if (isError) return <div className="p-6 text-red-500">Failed to load posts</div>;

    console.log(filteredPosts)

    return (
        <div className="bg-app min-h-screen text-primary p-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Post History</h2>
                    <p className="text-secondary mt-1">
                        View and manage all your published posts.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-default mt-6">
                {["All", "LinkedIn", "Twitter", "Instagram", "Medium"].map(
                    (tab) => (
                        <button
                            key={tab}
                            onClick={() => setActivePlatform(tab)}
                            className={`px-6 py-3 font-medium ${activePlatform === tab
                                ? "text-[var(--brand)] border-b-2 border-[var(--brand)]"
                                : "text-secondary hover:text-primary"
                                }`}
                        >
                            {tab}
                        </button>
                    )
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-6 bg-card border-default">
                <table className="w-full">
                    <thead className="border-b border-default">
                        <tr>
                            {[
                                "id",
                                "Post",
                                "Platform",
                                "Status",
                                "Date",
                                "Engagement",
                            ].map((h) => (
                                <th
                                    key={h}
                                    className="px-6 py-3 text-left text-xs uppercase text-muted"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <tr
                                    key={post._id}
                                    className="border-b border-default hover:bg-card-hover"
                                >
                                    <td className="px-6 py-4 font-mono text-sm text-secondary">
                                        POST-{post._id.slice(0, 4).toUpperCase()}
                                    </td>
                                    {/* Post Content */}
                                    <td className="px-6 py-4">
                                        <div className="font-medium truncate max-w-xs">
                                            {post.content?.slice(0, 60)}...
                                        </div>
                                    </td>

                                    {/* Platform */}
                                    <td className="px-6 py-4 capitalize">
                                        {post.platform || post.socialAccount?.platform || "N/A"}
                                    </td>


                                    {/* Status */}
                                    <td className="px-6 py-4 capitalize">
                                        {post.status}
                                    </td>

                                    {/* Date */}
                                    <td className="px-6 py-4">
                                        {new Date(
                                            post.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    {/* Engagement */}
                                    <td className="px-6 py-4">
                                        {post.likes || 0} likes •{" "}
                                        {post.comments || 0} comments
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center py-6 text-secondary"
                                >
                                    No posts found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer Count */}
            <div className="mt-4 text-secondary text-sm">
                Total Posts: <b>{filteredPosts.length}</b>
            </div>
        </div>
    );
};

export default Post;
