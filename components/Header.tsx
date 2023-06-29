"use client";

import { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import Icon from "@/assets/icons";

const Header = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isMainPage = pathname === "/";

	const onBack = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault();
		router.back();
	};

	const onNotifications = () => {};

	return (
		<div className="h-fit py-5 px-8 flex flex-row items-center justify-between bg-white">
			<button
				className="text-[--icon] hover:text-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
				onClick={onBack}
				disabled={isMainPage}
			>
				<Icon.CircleArrowLeft />
			</button>
			<button
				className="text-[--icon] hover:text-black cursor-pointer"
				onClick={onNotifications}
			>
				<Icon.Bell />
			</button>
		</div>
	);
};

export default Header;
