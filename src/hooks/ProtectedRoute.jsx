import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/commn/Loader";

const ProtectedRoute = () => {
    const { user, authChecked } = useSelector((state) => state.auth);

    if (!authChecked) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
