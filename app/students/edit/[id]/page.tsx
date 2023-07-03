"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { UserType } from "@/types";

import Form from "../../components/Form";
import LoadingState from "@/components/LoadingState";

interface EditStudentProps {
	params: {
		id: string;
	};
}

const EditStudent: React.FC<EditStudentProps> = ({ params }) => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(true);
	const [student, setStudent] = useState<UserType | null>(null);

	useEffect(() => {
		const getData = async () => {
			if (params?.id) {
				setLoading(true);
				const res = await fetch(`/api/students/${params.id}`, {
					method: "GET",
				});
				const result: UserType = await res.json();

				setStudent(result);
				setLoading(false);
			}
		};

		getData();
	}, [params]);

	const onEditStudent = useCallback(
		async (newStudent: UserType) => {
			const res = await fetch(`/api/students/${params.id}`, {
				method: "PUT",
				body: JSON.stringify(newStudent),
			});
			const result: UserType = await res.json();

			if (result) {
				toast.success("Edited!");
				router.push("/students");
			}
		},
		[params.id, router]
	);

	const content = useMemo(() => {
		if (loading) {
			return <LoadingState />;
		}

		if (student) {
			return <Form student={student} onSubmit={onEditStudent} />;
		}
	}, [loading, onEditStudent, student]);

	return (
		<div className="h-full bg-[--background] flex flex-col">
			<Header />
			<PageHeader title="Edit Student" />
			<div className="flex flex-1 py-5 px-8 overflow-hidden overflow-y-hidden justify-center">
				{content}
			</div>
		</div>
	);
};

export default EditStudent;
