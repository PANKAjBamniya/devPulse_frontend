import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/commn/Loader";

const ProtectedRoute = () => {
    const { user } = useSelector((state) => state.auth);
    const token = localStorage.getItem("token");

    if (!token) { return <Navigate to="/login" replace />; }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
