"use client";

import Button from "@/components/Button";
import SearchInput from "@/components/SearchInput";

interface PageHeaderProps {
	title: string;
	shownSearchInput?: boolean;
	buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	shownSearchInput,
	buttonProps,
}) => {
	return (
		<div className="h-[68px] px-8 pt-3">
			<div className="flex flex-row w-full items-center justify-between pb-3">
				<h1 className="flex-1 text-[22px] font-bold text-black">{title}</h1>
				{(shownSearchInput || buttonProps) && (
					<div className="gap-6 flex flex-auto flex-row items-center justify-end">
						{shownSearchInput && <SearchInput />}
						{buttonProps && (
							<Button className="w-[200px]" {...buttonProps}></Button>
						)}
					</div>
				)}
			</div>

			<hr className="border-[--border]" />
		</div>
	);
};

export default PageHeader;
