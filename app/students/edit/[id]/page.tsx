"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { UserType } from "@/types";

import Form from "../../components/Form";

interface EditStudentProps {
	params: {
		id: string;
	};
}

const EditStudent: React.FC<EditStudentProps> = ({ params }) => {
	const router = useRouter();
	const [student, setStudent] = useState<UserType | null>(null);

	useEffect(() => {
		const getData = async () => {
			if (params?.id) {
				const res = await fetch(`/api/students/${params.id}`, {
					method: "GET",
				});
				const result: UserType = await res.json();

				setStudent(result);
			}
		};

		getData();
	}, [params]);

	const onEditStudent = async () => {
		const res = await fetch(`/api/students/${params.id}`, {
			method: "PUT",
			body: JSON.stringify(student),
		});
		const result: UserType = await res.json();

		if (result) {
			toast.success("Edited!");
			router.push("/students");
		}
	};

	return (
		<div className="h-full bg-[--background] flex flex-col">
			<Header />
			<PageHeader
				title="Edit Student"
				buttonProps={{ children: "SAVE", onClick: onEditStudent }}
			/>
			<div className="flex flex-1 py-5 px-8 overflow-hidden overflow-y-hidden justify-center">
				<Form student={student} onChangeStudent={setStudent} />
			</div>
		</div>
	);
};

export default EditStudent;
