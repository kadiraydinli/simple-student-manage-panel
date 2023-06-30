"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Icon from "@/assets/icons";
import useAuth from "@/hooks/useAuth";
import { RouteType } from "@/types";

import SidebarItem from "./SidebarItem";
import MainContent from "./MainContent";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();
	const { onLogout } = useAuth();

	const routes: RouteType[] = [
		{
			icon: Icon.Home,
			label: "Home",
			active: pathname === "/",
			href: "/",
		},
		{
			icon: Icon.Bookmark,
			label: "Course",
			active: pathname === "/course",
			href: "/course",
		},
		{
			icon: Icon.Cap,
			label: "Students",
			active: pathname === "/students",
			href: "/students",
		},
		{
			icon: Icon.Payment,
			label: "Payment",
			active: pathname === "/payment",
			href: "/payment",
		},
		{
			icon: Icon.Report,
			label: "Report",
			active: pathname === "/report",
			href: "/report",
		},
		{
			icon: Icon.Settings,
			label: "Settings",
			active: pathname === "/settings",
			href: "/settings",
		},
	];

	return (
		<div className="flex h-screen">
			<div className="w-[270px] relative bg-[#F2EAE1] flex flex-col items-center pt-5 pb-8 overflow-y-auto">
				<div className="flex flex-col items-center">
					<div className="flex flex-row mb-20">
						<div className="border-l-4 border-[--secondary] mr-1.5"></div>
						<p className="text-black font-bold text-xl">MANAGE COURSES</p>
					</div>
					<div className="relative w-[128px] h-[128px] min-h-[64px] min-w-[64px] rounded-full overflow-hidden">
						<Image
							alt="profile"
							src="https://picsum.photos/2000"
							className="object-cover"
							fill
							priority={false}
						/>
					</div>
					<div className="font-bold text-base text-black mt-4">
						Kadir Aydınlı
					</div>
					<span className="text-[--primary] font-medium text-sm mt-[10px]">
						Admin
					</span>
				</div>

				<div className="flex flex-col gap-3 mt-20">
					{routes.map((item) => (
						<SidebarItem key={item.label} {...item} />
					))}
				</div>

				<div
					className="flex flex-row justify-center gap-x-5 hover:text-[--primary] cursor-pointer font-medium text-sm absolute bottom-8"
					onClick={onLogout}
				>
					Logout
					<Icon.Exit color={"text-black hover:text-[--primary]"} />
				</div>
			</div>

			<MainContent>{children}</MainContent>
		</div>
	);
};

export default Sidebar;
