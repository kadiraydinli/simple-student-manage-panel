"use client";

import Button from "@/components/Button";
import SearchInput from "@/components/SearchInput";

interface SubHeaderProps {
	title: string;
	searchInputProps: React.InputHTMLAttributes<HTMLInputElement>;
	buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const SubHeader: React.FC<SubHeaderProps> = ({
	title,
	searchInputProps,
	buttonProps,
}) => {
	return (
		<div className="px-8 py-5 flex flex-row items-center justify-between">
			<h1 className="flex-1 text-[22px] font-bold text-black">{title}</h1>
			<div className="gap-6 flex flex-auto flex-row items-center justify-end">
				<SearchInput placeholder="Search..." {...searchInputProps} />
				<Button className="w-[200px]" {...buttonProps}></Button>
			</div>
		</div>
	);
};

export default SubHeader;
