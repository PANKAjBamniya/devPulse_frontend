import React from "react";

const CreatPost = () => {
    return (
        <div className="bg-app min-h-screen text-primary">
            {/* Header */}
            <div className="">
                <h2 className="text-2xl font-bold text-primary">Create New Post</h2>
                <p className="text-secondary mt-1">
                    Compose and schedule your social media content.
                </p>
            </div>

            {/* Content */}
            <div className="mt-6">
                <div className="max-w-6xl">
                    <div className="bg-card border-default">

                        {/* Platforms */}
                        <div className="p-6 border-b border-default">
                            <label className="block text-sm font-medium text-secondary mb-3">
                                Select Platforms
                            </label>
                            <div className="flex flex-wrap gap-3">
                                <button className="px-4 py-2 border-2 border-[var(--brand)] bg-blue-500/10 text-blue-400 rounded-lg font-medium flex items-center gap-2">
                                    <i className="fab fa-linkedin"></i>
                                    LinkedIn
                                    <i className="fas fa-check-circle"></i>
                                </button>

                                <button className="px-4 py-2 border-2 border-default text-secondary rounded-lg font-medium flex items-center gap-2 hover:border-sky-500 hover:text-sky-400">
                                    <i className="fab fa-twitter"></i>
                                    Twitter
                                </button>

                                <button
                                    className="px-4 py-2 border-2 border-default text-muted rounded-lg font-medium flex items-center gap-2 cursor-not-allowed"
                                    disabled
                                >
                                    <i className="fab fa-instagram"></i>
                                    Instagram
                                    <span className="text-xs bg-app px-2 py-0.5 rounded">
                                        Not Connected
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 border-b border-default">
                            <label className="block text-sm font-medium text-secondary mb-3">
                                Post Content
                            </label>
                            <textarea
                                rows="8"
                                className="w-full px-4 py-3 bg-app border-default rounded-lg text-primary placeholder:text-muted focus:ring-2 focus:ring-[var(--brand)] outline-none resize-none"
                                placeholder="What's on your mind? Share your thoughts..."
                            />
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex gap-4">
                                    {["smile", "hashtag", "at"].map((i) => (
                                        <button
                                            key={i}
                                            className="p-2 text-secondary hover:bg-card-hover rounded-lg"
                                        >
                                            <i className={`fas fa-${i}`}></i>
                                        </button>
                                    ))}
                                </div>
                                <span className="text-sm text-muted">
                                    <b>0</b> / 3000
                                </span>
                            </div>
                        </div>

                        {/* Media */}
                        <div className="p-6 border-b border-default">
                            <label className="block text-sm font-medium text-secondary mb-3">
                                Media
                            </label>
                            <div className="border-2 border-dashed border-default rounded-lg p-8 text-center hover:border-[var(--brand)] hover:bg-card-hover cursor-pointer">
                                <i className="fas fa-cloud-upload-alt text-4xl text-muted mb-3"></i>
                                <div className="text-sm text-secondary">
                                    <span className="text-blue-400 font-medium">
                                        Click to upload
                                    </span>{" "}
                                    or drag & drop
                                </div>
                                <div className="text-xs text-muted mt-1">
                                    PNG, JPG, GIF up to 10MB
                                </div>
                            </div>
                        </div>

                        {/* Publish Options */}
                        <div className="p-6 border-b border-default">
                            <label className="block text-sm font-medium text-secondary mb-3">
                                Publish Options
                            </label>

                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 border-2 border-[var(--brand)] bg-blue-500/10 rounded-lg cursor-pointer">
                                    <input type="radio" checked readOnly />
                                    <div>
                                        <div className="font-medium text-primary">Publish Now</div>
                                        <div className="text-sm text-secondary">
                                            Post immediately
                                        </div>
                                    </div>
                                </label>

                                <label className="flex items-center gap-3 p-4 border-2 border-default rounded-lg cursor-pointer hover:border-[var(--brand)]">
                                    <input type="radio" />
                                    <div>
                                        <div className="font-medium text-primary">
                                            Schedule for Later
                                        </div>
                                        <div className="text-sm text-secondary">
                                            Choose date & time
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 flex justify-between">
                            <button className="btn-secondary">Save as Draft</button>
                            <div className="flex gap-3">
                                <button className="btn-secondary">Preview</button>
                                <button className="btn-primary flex items-center gap-2">
                                    <i className="fas fa-paper-plane"></i>
                                    Publish Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatPost;
