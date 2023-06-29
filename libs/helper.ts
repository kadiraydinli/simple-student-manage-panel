export const currencyFormat = (amount: number) => {
    const formattedAmount = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 3
    }).format(amount);

    return formattedAmount.replace('₺', '');
};
