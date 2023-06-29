export const STORAGE_KEY = "AUTH";

export type RouteType = {
    icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element;
    label: string;
    active: boolean;
    href: string;
};

export type CardType = {
    type: "student" | "course" | "payment" | "user";
    icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element;
    onClick?: () => void;
    label: string;
    labelStyle?: string;
    value: number;
    iconColor: string;
    style: string;
};