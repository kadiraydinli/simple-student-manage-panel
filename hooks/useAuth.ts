import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { STORAGE_KEY } from "@/types";

const useAuth = () => {
    const pathname = usePathname();
    const [isLogin, setIsLogin] = useState<boolean | null>(null);

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

    useEffect(() => {
        const result = localStorage.getItem(STORAGE_KEY);

        if (result === "true") {
            setIsLogin(true);
        } else if (pathname === "/") {
            location.replace("/login");
        }
    }, [pathname]);

    return {
        isLogin,
        onLogin,
        onLogout
    }
};

export default useAuth;