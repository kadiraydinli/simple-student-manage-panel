"use client";

import Header from "@/components/Header";
import LoadingState from "@/components/LoadingState";
import useAuth from "@/hooks/useAuth";

import PageContent from "./components/PageContent";

const Home = () => {
	const { isLogin } = useAuth();

	if (typeof isLogin === "undefined") {
		return (
			<div className="w-screen h-screen">
				<LoadingState />
			</div>
		);
	}

	return (
		<div>
			<Header />
			<div>
				<PageContent />
			</div>
		</div>
	);
};

export default Home;
