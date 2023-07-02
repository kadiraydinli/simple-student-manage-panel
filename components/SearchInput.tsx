"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Icon from "@/assets/icons";
import useDebounce from "@/hooks/useDebounce";
import useParams from "@/hooks/useParams";

interface SearchInputProps {
	placeholder?: string;
	className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder = "Search...",
	className,
}) => {
	const { setSearch } = useParams();
	const [value, setValue] = useState<string>("");
	const debounceValue = useDebounce<string>(value, 500);

	useEffect(() => {
		setSearch(debounceValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceValue]);

	return (
		<div className="flex w-[212px] flex-row focus-within:border-[--secondary] overflow-hidden h-[37px] rounded-lg bg-white border border-[--border] items-center p-4 gap-2">
			<input
				type="search"
				placeholder={placeholder}
				className={twMerge(
					`text-sm w-full placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
					className
				)}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Icon.Search color={"var(--icon)"} />
		</div>
	);
};

SearchInput.displayName = "SearchInput";

export default SearchInput;
