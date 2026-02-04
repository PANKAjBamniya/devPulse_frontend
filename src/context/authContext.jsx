import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                "http://localhost:3000/api/linkedin/get-user",
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (!res.ok) throw new Error("Unauthorized");

            const data = await res.json();
            setUser(data.user);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        await fetch("http://localhost:3000/api/logout", {
            credentials: "include",
        });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, getUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
