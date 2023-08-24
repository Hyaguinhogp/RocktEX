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

export const CompletePostToHTML = (completePost: string) => {
    const paragraphs = completePost.split("\n").map((paragraph) => paragraph.trim());
    console.log(paragraphs);
    const completeHTML = paragraphs.map((paragraph) => {
        return paragraph.substring(0, 1) == "i" ? createPostImageHTML(paragraph) : createPostTextHTML(paragraph);
    }).join("\n");

    return completeHTML;
}

const createPostTextHTML = (text: string) => {
    const subText = text.substring(2, text.length - 1);
    const textHTML = `<h3 class="post-text">${subText}</h3>`;

    return textHTML;
}

const createPostImageHTML = (text: string) => {
    const imageInfo = text.substring(2, text.length - 1).split("---");
    const imageURL = imageInfo[0];
    const imageDescription = imageInfo[1];
    const imageHTML = 
    `<div class="post-image__container">
        <figure class="post-image" style="background-image: url(${imageURL})"></figure>
        <h4 class="post-image__description">${imageDescription}</h4>
    </div>`;

    return imageHTML;
}