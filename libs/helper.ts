export const currencyFormat = (amount: number) => {
    const formattedAmount = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 3
    }).format(amount);

    return formattedAmount.replace('₺', '');
};

export const addHTTPToWebsite = (url: string) => {
    if (!url.startsWith("http://") || !url.startsWith("https://")) {
        return `http://${url}`
    }

    return url;
};

export const getAPI_URL = (): string => {
    return process.env.API_URL || 'http://localhost:3000/';
};