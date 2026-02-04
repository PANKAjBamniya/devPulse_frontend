import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";

const useGetUser = () => {
    const { user, setUser, setLoading } = useAuth();

    useEffect(() => {
        if (user) return;

        const getUser = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    "http://localhost:3000/api/linkedin/get-user",
                    { withCredentials: true }
                );
                setUser(res.data.user);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [user, setUser, setLoading]);
};

export default useGetUser;
