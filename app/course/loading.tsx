"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-gradient-to-r from-[--primary] to-[--secondary]">
			<BounceLoader color="white" size={40} />
		</div>
	);
};

export default Loading;
