"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

import LoginCard from "./components/LoginCard";

const Login = () => {
	const router = useRouter();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			router.replace("/");
		}
	}, [isLogin, router]);

	return (
		<div className="h-screen flex justify-center items-center bg-gradient-to-r from-[--primary] to-[--secondary]">
			<LoginCard />
		</div>
	);
};

export default Login;
