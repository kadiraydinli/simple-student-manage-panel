"use client";

import { Formik, Form as FormikForm } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

import Box from "@/components/Box";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";

const LoginCard = () => {
	const { onLogin } = useAuth();

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email address").required("Required"),
		password: Yup.string()
			.min(6, "Must be at least 6 characters")
			.required("Required"),
	});

	const handleSubmit = async (values: { email: string; password: string }) => {
		try {
			onLogin();
		} catch {
			toast.error("Something went wrong!");
		}
	};

	return (
		<Box>
			<div className="flex flex-row">
				<div className="border-l-[6px] border-[--secondary] mr-1.5"></div>
				<h1 className="font-bold text-3xl">MANAGE COURSES</h1>
			</div>

			<div className="flex flex-col text-center m-10">
				<h2 className="font-semibold text-2xl uppercase mb-2">Sign In</h2>
				<span className="font-normal text-sm text-[--text]">
					Enter your credentials to access your account
				</span>
			</div>

			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<FormikForm className="w-full">
						<Input
							name="email"
							labelTitle="Email"
							placeholder="Email"
							type="email"
						/>

						<Input
							name="password"
							type="password"
							placeholder="Enter your password"
							labelTitle="Password"
							autoComplete="on"
						/>
						<Button type="submit" className="mt-8">
							{isSubmitting ? "Loading..." : "SIGN IN"}
						</Button>
					</FormikForm>
				)}
			</Formik>

			<div className="mt-7 font-normal text-sm text-[--text]">
				Forgot your password?&nbsp;
				<span className="font-medium text-[--primary] underline cursor-pointer hover:text-[--secondary]">
					Reset Password
				</span>
			</div>
		</Box>
	);
};

export default LoginCard;
