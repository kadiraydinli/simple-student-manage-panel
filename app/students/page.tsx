"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import useStudents from "@/hooks/useStudents";

import List from "./components/List";

interface StudentsProps {
	searchParams: {
		page: string;
		size: string;
		search: string;
	};
}

const Students: React.FC<StudentsProps> = ({ searchParams }) => {
	const router = useRouter();
	const { students, getStudents, total } = useStudents();

	const onAddStudent = () => {
		router.push("/students/add");
	};

	useEffect(() => {
		getStudents({
			...searchParams,
			page: parseInt(searchParams.page),
			size: parseInt(searchParams.size),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	useEffect(() => {
		getStudents({});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="h-full bg-[--background] flex flex-col">
			<Header />
			<PageHeader
				title="Students List"
				shownSearchInput
				buttonProps={{ children: "ADD NEW STUDENT", onClick: onAddStudent }}
			/>
			<div className="flex flex-1 py-5 px-8 overflow-hidden overflow-y-hidden">
				<List students={students} total={total} />
			</div>
		</div>
	);
};

export default Students;
