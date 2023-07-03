"use client";

import Input from "@/components/Input";
import { UserType } from "@/types";

interface FormProps {
	student: UserType | null;
	onChangeStudent: (student: UserType) => void;
}

const Form: React.FC<FormProps> = ({ student, onChangeStudent }) => {
	const onChange = (key: string, value: string) => {
		if (student) {
			onChangeStudent({ ...student, [key]: value });
		}
	};

	const onChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (student) {
			onChangeStudent({ ...student, company: { name: e.target.value } });
		}
	};

	return (
		<form className="w-full">
			<div className="flex flex-row gap-2">
				<Input
					labelTitle="First Name"
					placeholder="First Name"
					type="text"
					value={student?.firstName || ""}
					onChange={(e) => onChange("firstName", e.target.value)}
				/>
				<Input
					labelTitle="Last Name"
					placeholder="Last Name"
					type="text"
					value={student?.lastName || ""}
					onChange={(e) => onChange("lastName", e.target.value)}
				/>
			</div>
			<Input
				labelTitle="Email"
				placeholder="Email"
				type="email"
				value={student?.email || ""}
				onChange={(e) => onChange("email", e.target.value)}
			/>
			<Input
				labelTitle="Phone"
				placeholder="+90 000 000 00 00"
				type="tel"
				value={student?.phone || ""}
				onChange={(e) => onChange("phone", e.target.value)}
			/>
			<Input
				labelTitle="Website"
				placeholder="https://example.com"
				type="url"
				value={student?.domain || ""}
				onChange={(e) => onChange("domain", e.target.value)}
			/>
			<Input
				labelTitle="Company Name"
				placeholder="Company Name"
				type="text"
				value={student?.company?.name || ""}
				onChange={onChangeCompanyName}
			/>
		</form>
	);
};

export default Form;
