import { ErrorMessage, Field } from "formik";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelTitle?: string;
	required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ labelTitle, required, name, className, type, disabled, ...props },
		ref
	) => {
		return (
			<div className="flex w-full flex-col">
				<label
					htmlFor={name}
					className="mb-3 mt-5 font-medium text-sm text-[--text]"
				>
					{labelTitle}

					{required && <span className="text-red-500">&nbsp;*</span>}
				</label>
				<Field
					type={type}
					name={name}
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
				<ErrorMessage
					name={name}
					component="div"
					className="text-red-500 text-xs font-medium mt-1"
				/>
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
