export type RouteType = {
    icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element;
    label: string;
    active: boolean;
    href: string;
};