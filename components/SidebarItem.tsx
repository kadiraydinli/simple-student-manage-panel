"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { RouteType } from "@/types";

interface SidebarItemProps extends RouteType {}

const SidebarItem: React.FC<SidebarItemProps> = ({
	icon,
	label,
	active,
	href,
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				`
					flex
					flex-row
					h-[40px]
					items-center
					justify-start
					px-10
					rounded
					w-full
					gap-x-3
					cursor-pointer
					hover:bg-[--primary]
					transition
					text-black
					py-1
				`,
				active && "bg-[--primary]"
			)}
		>
			<div className="w-[20px] h-[20px] flex justify-center items-center">
				{icon}
			</div>
			<p className="font-medium text-sm">{label}</p>
		</Link>
	);
};

export default SidebarItem;
