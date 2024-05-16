export const formatPrice = (price, amount = 1) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100) * amount);
    return formattedPrice;
};

export const getUniqueValues = (arr, key) => [
    ...new Set(arr.map(item => item[key])),
];
export const getUniqueColor = (arr, key) => [
    ...new Set(arr.map(p => p.colors).flat()),
];
