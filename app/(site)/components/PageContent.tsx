"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import Icon from "@/assets/icons";
import Card from "@/components/Card";
import { CardType } from "@/types";

const PageContent = () => {
	const router = useRouter();

	const cards: CardType[] = useMemo(
		() => [
			{
				type: "student",
				icon: Icon.Cap,
				onClick: () => router.push("/students"),
				label: "Students",
				iconColor: "#74C1ED",
				style: "bg-[#F0F9FF]",
				value: 243,
			},
			{
				type: "course",
				icon: Icon.Bookmark,
				onClick: () => router.push("/course"),
				label: "Course",
				iconColor: "#EE95C5",
				style: "bg-[#FEF6FB]",
				value: 13,
			},
			{
				type: "payment",
				icon: Icon.Payment,
				onClick: () => router.push("/payment"),
				label: "Payments",
				iconColor: "#F6C762",
				style: "bg-[#FEFBEC]",
				value: 556,
			},
			{
				type: "user",
				icon: Icon.User,
				label: "Users",
				labelStyle: "text-white",
				iconColor: "#FFFFFF",
				style: "bg-gradient-to-r from-[--primary] to-[--secondary]",
				value: 3,
			},
		],
		[router]
	);

	return (
		<div className="h-full w-full overflow-hidden overflow-y-auto">
			<div className="flex flex-row gap-x-[30px] p-[30px]">
				{cards.map((item) => (
					<Card key={item.type} {...item} />
				))}
			</div>
		</div>
	);
};

export default PageContent;
