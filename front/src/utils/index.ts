export const formatTextSize = (text: string, maxChar: number) => {
    return text.length <= maxChar ? text : text.substring(0, maxChar).trim() + "...";
}

export const formatPrice = (value: number) => {
    return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}

export const calculateDiscountPercent = (normalPrice: number, actualPrice: number) => {
    const diference = normalPrice - actualPrice;
    const percent = (diference * 100) / normalPrice;
    return "-" + percent.toFixed(0) + "%";
}