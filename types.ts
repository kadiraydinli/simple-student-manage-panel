export const STORAGE_KEY = "AUTH";

export const PER_PAGE_SIZES = [5, 10, 25, 50];

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

export type ListItemType = {
    avatar: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    companyName: string;
};

export type HairType = {
    color: string;
    type: string;
};

export type CoordinatesType = {
    lat: number;
    lng: number;
};

export type AddressType = {
    address: string;
    city: string;
    coordinates: CoordinatesType,
    postalCode: string;
    state: string;
};

export type BankType = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
};

export type CompanyType = {
    address?: AddressType;
    department?: string;
    name: string;
    title?: string;
};

export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: HairType;
    domain: string;
    ip: string;
    address: AddressType;
    macAddress: string;
    university: string;
    bank: BankType;
    company: CompanyType;
    ein: string;
    ssn: string;
    userAgent: string;
    isDeleted?: boolean;
    deletedOn?: string;
};

export type DataType = {
    users: UserType[] | null,
    total: number;
    skip: number;
    limit: number;
}