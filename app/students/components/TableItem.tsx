"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

import Icon from "@/assets/icons";
import { UserType } from "@/types";
import useStudents from "@/hooks/useStudents";
import { addHTTPToWebsite } from "@/libs/helper";

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
		<>
			<td className="border-solid border-l border-transparent rounded-l-lg">
				<div className="ml-3">
					<div className="relative w-[65px] h-[55px]">
						<Image
							alt="profile"
							src={image || ""}
							fill
							priority={false}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</td>

			<td>{`${firstName} ${lastName}`}</td>
			<td>
				<a href={`mailto:${email}`} className="hover:underline">
					{email}
				</a>
			</td>
			<td>
				<a href={`tel:${phone}`} className="hover:underline">
					{phone}
				</a>
			</td>
			<td>
				<Link
					href={addHTTPToWebsite(domain)}
					className="hover:underline"
					target="_blank"
					passHref={true}
				>
					{domain}
				</Link>
			</td>
			<td>{company.name}</td>

			<td className="border-solid border-r border-transparent rounded-r-lg">
				<div className="flex flex-row gap-8 justify-end mr-5">
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
			</td>
		</>
	);
};

export default Item;
