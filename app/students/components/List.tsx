"use client";

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { UserType } from "@/types";

import Item from "./ListItem";
import Pagination from "./Pagination";

interface ListProps {
	students: UserType[];
	total: number;
}

const List: React.FC<ListProps> = ({ students, total }) => {
	const listTitles = useMemo(
		() => ["Name", "Email", "Phone", "Website", "Company Name", ""],
		[]
	);

	return (
		<div className="w-full h-full">
			<div className="flex flex-row mb-5">
				{listTitles.map((title, index) => (
					<div
						key={`list-${index}`}
						className={twMerge(
							"flex-1 text-[#ACACAC] font-semibold text-xs",
							index === 0 && "ml-[110px]"
						)}
					>
						{title}
					</div>
				))}
			</div>
			<div className="gap-[10px] flex flex-col mb-8 max-h-[45vh] lg:max-h-[50vh] xl:max-h-[65vh] overflow-y-auto">
				{students.map((user) => (
					<div key={`list-${user.id}`}>
						{user.id}
						<Item {...user} />
					</div>
				))}
			</div>

			<div className="flex justify-end">
				<Pagination count={total} />
			</div>
		</div>
	);
};

export default List;
