"use client";

import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { UserType } from "@/types";

import Form from "../components/Form";

interface AddStudentProps {}

const AddStudent: React.FC<AddStudentProps> = ({}) => {
	const router = useRouter();
	const emptyUser = Object.create(null) as UserType;

	const onAddStudent = async (student: UserType) => {
		const res = await fetch("/api/students/add", {
			method: "POST",
			body: JSON.stringify(student),
		});
		const result: UserType = await res.json();

		if (result) {
			toast.success("New student created!");
			router.push("/students");
		}
	};

	return (
		<div className="h-full bg-[--background] flex flex-col">
			<Header />
			<PageHeader title="Add Student" />
			<div className="flex flex-1 py-5 px-8 overflow-hidden overflow-y-hidden justify-center">
				<Form student={emptyUser} onSubmit={onAddStudent} />
			</div>
		</div>
	);
};

export default AddStudent;
