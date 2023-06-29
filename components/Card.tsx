"use client";

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { currencyFormat } from "@/libs/helper";
import { CardType } from "@/types";

interface CardProps extends CardType {}

const Card: React.FC<CardProps> = ({
	type,
	icon: Icon,
	onClick,
	label,
	labelStyle,
	iconColor,
	style,
	value,
}) => {
	const numberValue = useMemo(() => {
		if (type === "payment") {
			return currencyFormat(value);
		}

		return value;
	}, [type, value]);

	return (
		<div
			onClick={onClick}
			className={twMerge(
				"min-w-[255px] flex-1 min-h-[157px] h-[157px] rounded-lg p-5 cursor-pointer flex flex-col justify-between",
				style
			)}
		>
			<div className="flex flex-col mb-[10px]">
				<Icon color={iconColor} />
				<p
					className={twMerge(
						"text-[--text] font-medium text-sm mt-4",
						labelStyle
					)}
				>
					{label}
				</p>
			</div>

			<p className={"text-black font-bold text-3xl text-right"}>
				{numberValue}
				{type === "payment" && (
					<p className="text-black font-bold text-lg inline-block">₺</p>
				)}
			</p>
		</div>
	);
};

export default Card;
