import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        authChecked: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.authChecked = true;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.user = null;
            state.authChecked = true;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
        setAuthChecked: (state) => {
            state.authChecked = true;
        },
    },
});

export const { setUser, clearUser, setAuthChecked } = authSlice.actions;
export default authSlice.reducer;
