"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginCard = () => {
	return (
		<div className="bg-white rounded-lg pt-[44px] px-8 pb-10 drop-shadow flex flex-col justify-center items-center">
			<div className="flex flex-row">
				<div className="divide-x-2 bg-red-500"></div>
				<h1 className="font-bold text-3xl">MANAGE COURSES</h1>
			</div>

			<div className="flex flex-col text-center m-10">
				<h2 className="font-semibold text-2xl uppercase mb-2">Sign In</h2>
				<span className="font-normal text-sm text-[--text]">
					Enter your credentials to access your account
				</span>
			</div>

			<form action="" className="w-full">
				<Input placeholder="Enter your email" labelTitle="Email" />
				<Input
					placeholder="Enter your password"
					labelTitle="Password"
					type="password"
				/>

				<Button className="mt-8">Tıkla</Button>
			</form>

			<div className="mt-7 font-normal text-sm text-[--text]">
				Forgot your password?&nbsp;
				<span className="font-medium text-[--primary] underline cursor-pointer hover:text-[--secondary]">
					Reset Password
				</span>
			</div>
		</div>
	);
};

export default LoginCard;
