"use client";

import Icon from "@/assets/icons";
import { PER_PAGE_SIZES } from "@/types";
import useParams from "@/hooks/useParams";

interface PaginationProps {
	count: number;
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
	const { page, size, setPage, setSize } = useParams();

	const startPage = page * size - size || 1;
	const endPage = page * size;

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSize(parseInt(e.target.value));
	};

	const onNext = () => {
		setPage(page + 1);
	};

	const onPrevious = () => {
		if (page !== 1) {
			setPage(page - 1);
		}
	};

	return (
		<div className="flex flex-row items-center text-[#9FA2B4] font-normal text-sm">
			<div>
				<label htmlFor="perPage">Rows per page:</label>
				<select
					name="perPage"
					id="perPage"
					className="w-9 text-left ml-1 bg-[--background]"
					value={size}
					onChange={onChange}
				>
					<optgroup label="Per Page">
						{PER_PAGE_SIZES.map((size) => (
							<option key={`per-page-size-${size}`} value={size}>
								{size}
							</option>
						))}
					</optgroup>
				</select>
			</div>

			<div className="flex flex-row justify-center items-center ml-12">
				<p>{`${startPage}-${endPage} of ${count}`}</p>
				<button
					className="cursor-pointer hover:text-black ml-6 disabled:cursor-not-allowed"
					onClick={onPrevious}
					disabled={page === 1}
				>
					<Icon.ArrowLeft />
				</button>
				<button
					className="rotate-180 cursor-pointer hover:text-black ml-3 disabled:cursor-not-allowed"
					disabled={size === count}
					onClick={onNext}
				>
					<Icon.ArrowLeft />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
