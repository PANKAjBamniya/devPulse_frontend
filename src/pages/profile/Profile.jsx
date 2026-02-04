
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Profile = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate("/login");
        }
    }, [user, loading]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-2xl">Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.avatar} className="w-24 rounded-full" />
        </div>
    );
};

export default Profile;
