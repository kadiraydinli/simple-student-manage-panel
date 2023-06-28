import { useState } from "react";

import { STORAGE_KEY } from "@/types";

const useAuth = () => {
    const result = localStorage.getItem(STORAGE_KEY);
    const [isLogin, setIsLogin] = useState<boolean>(result === "true");

    const onLogin = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setIsLogin(true);
        location.replace("/");
    };

    const onLogout = () => {
        localStorage.clear();
        setIsLogin(false);
        location.replace("/login");
    };

    return {
        isLogin,
        onLogin,
        onLogout
    }
};

export default useAuth;