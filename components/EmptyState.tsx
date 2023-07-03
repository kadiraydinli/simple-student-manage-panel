"use client";

interface EmptyStateProps {
	title: string;
	description?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
	return (
		<div className="w-full h-full flex items-center justify-center flex-col gap-2">
			<p className="text-black font-bold text-3xl">{title}</p>
			<p className="text-black font-medium">{description}</p>
		</div>
	);
};

export default EmptyState;
