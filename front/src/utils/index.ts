export const formatTextSize = (text: string, maxChar: number) => {

    return text.length <= maxChar ? text : text.substring(0, maxChar).trim() + "...";
}