"use client";

import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import useAuth from "@/hooks/useAuth";

interface RootContentProps {
	children: React.ReactNode;
}

const RootContent: React.FC<RootContentProps> = ({ children }) => {
	const { isLogin } = useAuth();

	if (isLogin) {
		return <Sidebar>{children}</Sidebar>;
	}

	return <MainContent>{children}</MainContent>;
};

export default RootContent;
