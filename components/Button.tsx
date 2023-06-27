import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				type={type}
				className={twMerge(
					`
                        w-full
                        h-[44px]
                        rounded
                        bg-[--primary]
                        p-2
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        uppercase
                        font-medium
                        text-sm
                        text-white
                        hover:opacity-90
                        transition
                    `,
					className
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
