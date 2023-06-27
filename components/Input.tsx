import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelTitle?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ labelTitle, className, type, disabled, ...props }, ref) => {
		return (
			<div className="flex w-full flex-col">
				<label className="mb-3 mt-5 font-medium text-sm text-[--text]">
					{labelTitle}
				</label>
				<input
					type={type}
					className={twMerge(
						`
                        flex
                        w-full
                        h-[44px]
                        rounded
                        bg-white
                        border
                        border-[--border]
                        p-3
                        text-sm
                        placeholder:text-neutral-400
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        focus:outline-none
                        focus:border-[--secondary]
                    `,
						className
					)}
					disabled={disabled}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
