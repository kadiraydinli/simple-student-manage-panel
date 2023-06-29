import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import Icon from "@/assets/icons";

interface SearchInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	({ className, type, disabled, ...props }, ref) => {
		return (
			<div className="flex w-[212px] flex-row focus-within:border-[--secondary] overflow-hidden h-[37px] rounded-lg bg-white border border-[--border] items-center p-4 gap-2">
				<input
					type={type}
					className={twMerge(
						`text-sm w-full placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
						className
					)}
					disabled={disabled}
					ref={ref}
					{...props}
				/>
				<Icon.Search color={"var(--icon)"} />
			</div>
		);
	}
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
