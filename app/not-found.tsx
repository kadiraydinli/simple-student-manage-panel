import Link from "next/link";

const NotFound = () => {
	return (
		<div className="h-screen flex justify-center items-center flex-col gap-5 bg-gradient-to-r from-[--primary] to-[--secondary]">
			<h1 className="font-bold text-5xl">Not Found!</h1>
			<Link href={"/"}>
				<p className="text-2xl font-regular text-black hover:text-[--text]">
					Go to Home
				</p>
			</Link>
		</div>
	);
};

export default NotFound;
