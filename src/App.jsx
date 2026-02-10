import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import PlatForm from "./pages/platform/PlatForm";
import Profile from "./pages/profile/Profile";

import ProtectedRoute from "./hooks/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import HomeLayout from "./layout/HomeLayout";
import NotFound from "./components/ui/NotFoundPage";
import { useMeQuery } from "./feature/api/authApiSlice";
import { useEffect } from "react";
import { setUser } from "./feature/auth/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()

  const { data, isLoading } = useMeQuery(undefined, {
    skip: !localStorage.getItem("token"),
  });

  useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data.user));
    }
  }, [data]);


  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route element={<HomeLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/platforms" element={<PlatForm />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="devpulse-toast"
      />
    </BrowserRouter>
  );
};

export default App;
