"use client";

import Box from "@/components/Box";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";

const LoginCard = () => {
	const { onLogin } = useAuth();

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

			<form action="" className="w-full">
				<Input type="email" placeholder="Enter your email" labelTitle="Email" />
				<Input
					type="password"
					placeholder="Enter your password"
					labelTitle="Password"
					autoComplete="on"
				/>

				<Button className="mt-8" onClick={onLogin}>
					Tıkla
				</Button>
			</form>

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
