"use client";

import { useMemo } from "react";

import { UserType } from "@/types";

import Item from "./TableItem";
import Pagination from "./Pagination";

interface TableProps {
	students: UserType[];
	total: number;
}

const Table: React.FC<TableProps> = ({ students, total }) => {
	const listTitles = useMemo(
		() => ["", "Name", "Email", "Phone", "Website", "Company Name", ""],
		[]
	);

	return (
		<div className="w-full h-full">
			<table
				className="w-full table-auto border-separate border-spacing-y-3"
				cellSpacing={0}
			>
				<thead className="h-14">
					<tr>
						{listTitles.map((title, index) => (
							<th
								key={`table-${index}`}
								className={
									"flex-1 text-[#ACACAC] font-semibold text-xs text-left"
								}
							>
								{title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="space-y-4">
					{students.map((user) => (
						<tr
							key={`list-${user.id}`}
							className="bg-white h-[85px] hover:bg-slate-100 font-normal text-sm text-black"
						>
							<Item {...user} />
						</tr>
					))}
				</tbody>
			</table>

			<div className="flex justify-end mt-8">
				<Pagination count={total} />
			</div>
		</div>
	);
};

export default Table;
