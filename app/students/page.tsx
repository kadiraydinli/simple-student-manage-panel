"use client";

import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import useStudents from "@/hooks/useStudents";
import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";

import Table from "./components/Table";

interface StudentsProps {
	searchParams: {
		page: string;
		size: string;
		search: string;
	};
}

const Students: React.FC<StudentsProps> = ({ searchParams }) => {
	const router = useRouter();
	const { students, getStudents, total, loading } = useStudents();

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

	const content = useMemo(() => {
		if (loading) {
			return <LoadingState />;
		}

		if (searchParams.search && students.length === 0) {
			return (
				<EmptyState
					title="Students Not Found!"
					description="Try searching again with a different word."
				/>
			);
		}

		if (students.length === 0) {
			return (
				<EmptyState
					title="There are no students!"
					description="You can add new students."
				/>
			);
		}

		return <Table students={students} total={total} />;
	}, [loading, searchParams.search, students, total]);

	return (
		<div className="h-full bg-[--background] flex flex-col">
			<Header />
			<PageHeader
				title="Students List"
				shownSearchInput
				buttonProps={{ children: "ADD NEW STUDENT", onClick: onAddStudent }}
			/>
			<div className="flex flex-1 py-5 px-8">{content}</div>
		</div>
	);
};

export default Students;
