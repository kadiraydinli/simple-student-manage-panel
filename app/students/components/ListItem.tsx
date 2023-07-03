"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Icon from "@/assets/icons";
import { UserType } from "@/types";
import useStudents from "@/hooks/useStudents";

interface ItemProps extends UserType {}

const Item: React.FC<ItemProps> = ({
	id,
	image,
	firstName,
	lastName,
	email,
	phone,
	domain,
	company,
}) => {
	const router = useRouter();
	const { deleteStudent } = useStudents();

	const onEdit = () => {
		router.push(`/students/edit/${id}`);
	};

	const onDelete = async () => {
		if (
			window.confirm(
				`Are you sure you want to delete ${firstName} ${lastName}?`
			)
		) {
			const result = await deleteStudent(id);

			if (result) {
				toast.success("Deleted!");
			}
		}
	};

	return (
		<div className="w-full pl-3 pr-5 min-h-[85px] h-[85px] flex flex-row items-center justify-between rounded-lg bg-white hover:bg-slate-100">
			<div className="relative w-[65px] h-[55px] rounded-lg overflow-hidden">
				<Image
					alt="profile"
					src={image || ""}
					fill
					priority={false}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="flex flex-row flex-1 ml-8 items-center justify-between">
				<p>{`${firstName} ${lastName}`}</p>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{domain}</p>
				<p>{company.name}</p>
			</div>

			<div className="flex flex-row gap-8">
				<div
					className="text-[--primary] cursor-pointer hover:text-[--secondary]"
					onClick={onEdit}
				>
					<Icon.Pen />
				</div>
				<div
					className="text-[--primary] cursor-pointer hover:text-[--secondary]"
					onClick={onDelete}
				>
					<Icon.Trash />
				</div>
			</div>
		</div>
	);
};

export default Item;
