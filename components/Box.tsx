"use client";

interface BoxProps {
	children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
	return (
		<div className="bg-white rounded-lg pt-[44px] px-8 pb-10 drop-shadow flex flex-col justify-center items-center">
			{children}
		</div>
	);
};

export default Box;
