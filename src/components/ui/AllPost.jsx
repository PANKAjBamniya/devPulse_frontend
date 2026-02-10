import React from 'react'
import { useGetMyAllPostQuery } from '../../feature/api/scheduleApi';

const AllPost = () => {
    const { data, isLoading } = useGetMyAllPostQuery();


    return (
        <div className=" mt-8">
            <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                <p className="text-sm text-gray-400 mb-4">ALL GENERATED POSTS</p>

                {isLoading && (
                    <p className="text-gray-500 text-sm">Loading posts...</p>
                )}

                {!isLoading && data?.data?.length === 0 && (
                    <p className="text-gray-500 text-sm">No posts found</p>
                )}

                <div className="space-y-4">
                    {data?.data?.map((post) => (
                        <div
                            key={post._id}
                            className="bg-zinc-800 rounded-lg p-4 border border-zinc-700"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                                    {post.category?.name || "General"}
                                </span>

                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${post.status === "posted"
                                        ? "bg-green-500/10 text-green-400"
                                        : post.status === "failed"
                                            ? "bg-red-500/10 text-red-400"
                                            : "bg-yellow-500/10 text-yellow-400"
                                        }`}
                                >
                                    {post.status}
                                </span>
                            </div>

                            {/* Content */}
                            <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                                {post.content}
                            </p>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                                <span>
                                    Scheduled:{" "}
                                    {new Date(post.scheduledAt).toLocaleDateString()}
                                </span>

                                {post.postedAt && (
                                    <span>
                                        Posted: {new Date(post.postedAt).toLocaleDateString()}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllPost