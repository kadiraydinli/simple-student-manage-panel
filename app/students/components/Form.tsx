"use client";

import { Formik, Form as FormikForm } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

import Input from "@/components/Input";
import { UserType } from "@/types";
import Button from "@/components/Button";

interface FormProps {
	student: UserType | null;
	onSubmit: (student: UserType) => void;
}

const Form: React.FC<FormProps> = ({ student, onSubmit }) => {
	const validationSchema = Yup.object({
		firstName: Yup.string()
			.max(15, "Must be 15 characters or less")
			.required("Required"),
		lastName: Yup.string()
			.max(20, "Must be 20 characters or less")
			.required("Required"),
		email: Yup.string().email("Invalid email address").required("Required"),
		phone: Yup.number().required("Required"),
		domain: Yup.string().url().required("Required"),
		companyName: Yup.string()
			.max(15, "Must be 15 characters or less")
			.required("Required"),
	});

	const handleSubmit = async (
		values: Pick<
			UserType,
			"firstName" | "lastName" | "email" | "phone" | "domain"
		> & { companyName: string }
	) => {
		try {
			if (student) {
				onSubmit({
					...student,
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
					phone: values.phone,
					domain: values.domain,
					company: { name: values.companyName },
				});
			}
		} catch {
			toast.error("Something went wrong!");
		}
	};

	return (
		<Formik
			initialValues={{
				firstName: student?.firstName || "",
				lastName: student?.lastName || "",
				email: student?.email || "",
				phone: student?.phone || "",
				domain: student?.domain || "",
				companyName: student?.company?.name || "",
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<FormikForm className="w-full">
					<div className="flex flex-row gap-2">
						<Input
							name="firstName"
							labelTitle="First Name"
							placeholder="First Name"
							required
							type="text"
						/>
						<Input
							name="lastName"
							labelTitle="Last Name"
							placeholder="Last Name"
							required
							type="text"
						/>
					</div>
					<Input
						name="email"
						labelTitle="Email"
						placeholder="Email"
						required
						type="email"
					/>
					<Input
						name="phone"
						labelTitle="Phone"
						placeholder="+90 000 000 00 00"
						required
						type="tel"
					/>
					<Input
						name="domain"
						labelTitle="Website"
						placeholder="https://example.com"
						required
						type="url"
					/>
					<Input
						name="companyName"
						labelTitle="Company Name"
						placeholder="Company Name"
						required
						type="text"
					/>
					<div className="flex w-full justify-center mt-4">
						<Button type="submit" className="w-1/2">
							{isSubmitting ? "Loading..." : "SAVE"}
						</Button>
					</div>
				</FormikForm>
			)}
		</Formik>
	);
};

export default Form;
