import React from "react";

const Post = () => {
    return (
        <div className="bg-app min-h-screen text-primary">
            {/* Header */}
            <div className="">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-primary">Post History</h2>
                        <p className="text-secondary mt-1">
                            View and manage all your published posts.
                        </p>
                    </div>
                    <button className="btn-primary flex items-center gap-2">
                        <i className="fas fa-plus"></i>
                        New Post
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="mt-6">
                <div className="bg-card  border-default mb-6">
                    {/* Filters */}
                    <div className="p-6 border-b border-default flex gap-4">
                        <div className="flex-1 relative">
                            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted"></i>
                            <input
                                placeholder="Search posts..."
                                className="w-full pl-11 pr-4 py-2.5 bg-app border-default rounded-lg text-primary placeholder:text-muted focus:ring-2 focus:ring-[var(--brand)] outline-none"
                            />
                        </div>

                        <select className="bg-app border-default rounded-lg px-4 py-2.5 text-primary">
                            <option>All Status</option>
                            <option>Published</option>
                            <option>Scheduled</option>
                            <option>Draft</option>
                        </select>

                        <select className="bg-app border-default rounded-lg px-4 py-2.5 text-primary">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Most Engaged</option>
                        </select>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-default">
                        {["All", "LinkedIn", "Twitter", "Instagram", "Medium"].map(
                            (tab, i) => (
                                <button
                                    key={i}
                                    className={`px-6 py-3 font-medium ${i === 0
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
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-app border-b border-default">
                                <tr>
                                    {[
                                        "Post",
                                        "Platform",
                                        "Status",
                                        "Published",
                                        "Engagement",
                                        "Actions",
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
                                <tr className="border-b border-default hover:bg-card-hover">
                                    <td className="px-6 py-4">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                                            <div>
                                                <div className="font-medium text-primary truncate">
                                                    5 essential tips for growing your LinkedIn presence
                                                </div>
                                                <div className="text-sm text-secondary truncate">
                                                    Learn the strategies that actually work…
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-secondary">
                                        <i className="fab fa-linkedin text-blue-500 mr-1"></i>
                                        LinkedIn
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="badge-success">Published</span>
                                    </td>

                                    <td className="px-6 py-4 text-secondary">
                                        Jan 15, 2024 <br />
                                        <span className="text-muted">2:30 PM</span>
                                    </td>

                                    <td className="px-6 py-4 text-secondary">
                                        <div className="text-primary font-medium">
                                            1,234 <span className="text-muted">likes</span>
                                        </div>
                                        342 comments
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            {["eye", "edit", "ellipsis-v"].map((i) => (
                                                <button
                                                    key={i}
                                                    className="p-2 text-secondary hover:bg-card-hover rounded-lg"
                                                >
                                                    <i className={`fas fa-${i}`}></i>
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-default flex justify-between items-center">
                        <span className="text-secondary text-sm">
                            Showing <b>1</b> to <b>4</b> of <b>24</b> posts
                        </span>

                        <div className="flex gap-2">
                            <button className="px-3 py-2 border-default rounded-lg text-sm opacity-50">
                                Previous
                            </button>
                            <button className="px-3 py-2 btn-primary text-sm">1</button>
                            <button className="px-3 py-2 border-default rounded-lg text-sm hover:bg-card-hover">
                                2
                            </button>
                            <button className="px-3 py-2 border-default rounded-lg text-sm hover:bg-card-hover">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
