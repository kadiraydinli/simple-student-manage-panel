interface MainContentProps {
	children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
	return <main className="h-full flex-1 overflow-y-auto">{children}</main>;
};

export default MainContent;
