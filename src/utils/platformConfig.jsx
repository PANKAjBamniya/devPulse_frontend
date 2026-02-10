import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook, } from "react-icons/fi";


export const platformConfig = [
    {
        key: "linkedin",
        name: "LinkedIn",
        icon: FiLinkedin,
        color: "#2563EB",
    },
    {
        key: "twitter",
        name: "Twitter",
        icon: FiTwitter,
        color: "#38BDF8",
    },
    {
        key: "instagram",
        name: "Instagram",
        icon: FiInstagram,
        color: "#EC4899",
    },
    {
        key: "facebook",
        name: "Facebook",
        icon: FiFacebook,
        color: "#1D4ED8",
    },
];



export const platformMeta = {
    linkedin: {
        name: "LinkedIn",
        description:
            "Connect your LinkedIn account to auto-post, schedule content, and grow professionally.",
        icon: FiLinkedin,
        color: "#2563EB",
        authType: "oauth",
        authUrl: () => {
            const state = crypto.randomUUID();
            sessionStorage.setItem("linkedin_oauth_state", state);

            const params = new URLSearchParams({
                response_type: "code",
                client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
                redirect_uri: "http://localhost:3000/api/linkedin/callback",
                scope: "openid profile email w_member_social",
                state,
            });

            return `https://www.linkedin.com/oauth/v2/authorization?${params}`;
        },
    },

    twitter: {
        name: "Twitter",
        description:
            "Connect Twitter to schedule tweets and track real-time engagement.",
        icon: FiTwitter,
        color: "#38BDF8",
        authType: "dummy",
    },

    instagram: {
        name: "Instagram",
        description:
            "Connect Instagram to publish reels, posts, and monitor analytics.",
        icon: FiInstagram,
        color: "#EC4899",
        authType: "dummy",
    },

    facebook: {
        name: "Facebook",
        description:
            "Connect your Facebook page to automate posting and insights.",
        icon: FiFacebook,
        color: "#1D4ED8",
        authType: "dummy",
    },
};


