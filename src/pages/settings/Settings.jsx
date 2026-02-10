import React from "react";

const Settings = () => {

    return (
        <div className="bg-app min-h-screen text-primary">
            {/* Header */}
            <div className="">
                <h2 className="text-2xl font-bold text-primary">Settings</h2>
                <p className="text-secondary mt-1">
                    Manage your account settings and preferences.
                </p>
            </div>

            <div className="mt-6">
                <div className="max-w-6xl mx-auto space-y-6">

                    {/* Profile */}
                    <div className="bg-card rounded-2xl">
                        <div className="p-6 border-b border-gray-800">
                            <h3 className="text-lg font-semibold text-primary">
                                Profile Information
                            </h3>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                                    JD
                                </div>
                                <div>
                                    <button className="btn-secondary text-sm">Change Photo</button>
                                    <p className="text-xs text-muted mt-2">
                                        JPG, PNG or GIF. Max size 2MB.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-secondary mb-2">
                                        First Name
                                    </label>
                                    <input
                                        defaultValue="John"
                                        className="w-full bg-app border-default px-4 py-2 rounded-lg text-primary focus:ring-2 focus:ring-[var(--brand)] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-secondary mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        defaultValue="Doe"
                                        className="w-full bg-app border-default px-4 py-2 rounded-lg text-primary focus:ring-2 focus:ring-[var(--brand)] outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-secondary mb-2">
                                    Email
                                </label>
                                <input
                                    defaultValue="john@example.com"
                                    className="w-full bg-app border-default px-4 py-2 rounded-lg text-primary focus:ring-2 focus:ring-[var(--brand)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-secondary mb-2">
                                    Bio
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Tell us about yourself..."
                                    className="w-full bg-app border-default px-4 py-2 rounded-lg text-primary placeholder:text-muted focus:ring-2 focus:ring-[var(--brand)] outline-none"
                                />
                            </div>

                            <button className="btn-primary mt-4">Save Changes</button>
                        </div>
                    </div>

                    {/* Connected Accounts */}
                    <div className="bg-card rounded-2xl">
                        <div className="p-6 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-primary">
                                Connected Accounts
                            </h3>
                        </div>

                        <div className="p-6 space-y-3">
                            <div className="flex justify-between items-center p-4 bg-app rounded-lg border-default">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-linkedin text-white"></i>
                                    </div>
                                    <div>
                                        <div className="font-medium text-primary">LinkedIn</div>
                                        <div className="text-sm text-secondary">John Doe</div>
                                    </div>
                                </div>
                                <span className="badge-success">Connected</span>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-app rounded-lg border-default">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-twitter text-white"></i>
                                    </div>
                                    <div>
                                        <div className="font-medium text-primary">Twitter</div>
                                        <div className="text-sm text-secondary">@johndoe</div>
                                    </div>
                                </div>
                                <span className="badge-success">Connected</span>
                            </div>

                            <div className="flex justify-between items-center p-4 border-default rounded-lg">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-instagram text-pink-400"></i>
                                    </div>
                                    <div>
                                        <div className="font-medium text-primary">Instagram</div>
                                        <div className="text-sm text-secondary">Not connected</div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium text-sm">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-card rounded-2xl ">
                        <div className="p-6 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-primary">
                                Notification Preferences
                            </h3>
                        </div>

                        <div className="p-6 space-y-4">
                            {[
                                "Email notifications",
                                "Post engagement alerts",
                                "Weekly reports",
                                "Marketing emails",
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <div>
                                        <div className="font-medium text-primary">{item}</div>
                                        <div className="text-sm text-secondary">
                                            Manage notification preference
                                        </div>
                                    </div>
                                    <input type="checkbox" className="accent-blue-500 w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-card rounded-2xl border border-red-500/40">
                        <div className="p-6 border-b border-red-500/40">
                            <h3 className="text-lg font-semibold text-red-500">
                                Danger Zone
                            </h3>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center p-4 border border-red-500/40 rounded-lg">
                                <div>
                                    <div className="font-medium text-primary">
                                        Disconnect all accounts
                                    </div>
                                    <div className="text-sm text-secondary">
                                        Remove all connected platforms
                                    </div>
                                </div>
                                <button className="btn-danger">Disconnect All</button>
                            </div>

                            <div className="flex justify-between items-center p-4 border border-red-500/40 rounded-lg">
                                <div>
                                    <div className="font-medium text-primary">
                                        Delete account
                                    </div>
                                    <div className="text-sm text-secondary">
                                        Permanently delete your account
                                    </div>
                                </div>
                                <button className="btn-danger">Delete Account</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;
