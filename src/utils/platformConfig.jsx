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
        authUrl: (userId) => {
            const state = JSON.stringify({
                userId,
                nonce: crypto.randomUUID(),
            });

            sessionStorage.setItem("linkedin_oauth_state", state);

            const params = new URLSearchParams({
                response_type: "code",
                client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
                redirect_uri: "http://localhost:3000/api/linkedin/callback",
                scope: "openid profile email w_member_social",
                state,
            });

            return `https://www.linkedin.com/oauth/v2/authorization?${params}`;
        }
    },

    twitter: {
        name: "Twitter",
        description:
            "Connect Twitter to schedule tweets and track real-time engagement.",
        icon: FiTwitter,
        color: "#38BDF8",
        authType: "oauth",
        authUrl: () => {
            return `${import.meta.env.VITE_API_URL}/api/twitter`
        },
    },

    facebook: {
        name: "Facebook",
        description:
            "Connect your Facebook page to automate posting and insights.",
        icon: FiFacebook,
        color: "#1D4ED8",
        authType: "oauth",
        authUrl: (userId) => {
            const state = JSON.stringify({
                userId,
                nonce: crypto.randomUUID(),
            });

            sessionStorage.setItem("facebook_oauth_state", state);

            const params = new URLSearchParams({
                client_id: import.meta.env.VITE_FACEBOOK_APP_ID,
                redirect_uri: "http://localhost:3000/api/facebook/callback",
                scope: "pages_manage_posts,pages_read_engagement,pages_show_list",
                response_type: "code",
                state,
            });


            return `https://www.facebook.com/v19.0/dialog/oauth?${params}`;
        }
    },

    instagram: {
        name: "Instagram",
        description:
            "Connect Instagram to publish reels, posts, and monitor analytics.",
        icon: FiInstagram,
        color: "#EC4899",
        authType: "dummy",
    },
};


