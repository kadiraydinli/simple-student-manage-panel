"use client";

import { BounceLoader } from "react-spinners";

const LoadingState = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<BounceLoader color="var(--primary)" size={50} />
		</div>
	);
};

export default LoadingState;
