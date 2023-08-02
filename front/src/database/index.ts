import { IGame } from "../interfaces/Games";
import { IHighligt } from "../interfaces/Highlights";
import { IMostRead } from "../interfaces/MostReads";
import { IPostCardData } from "../interfaces/Post";

export const HighlightsData: IHighligt[] = [
    {
        title: "SpaceX lança novo foguete",
        description: "O novo foguete é repleto de detalhes e tem destino à Marte! ...",
        date: "17/08/2023",
        image_url: "https://segredosdomundo.r7.com/wp-content/uploads/2020/06/spacex-historia-pioneirismo-e-exploracao-sustentavel-11.jpg"
    },
    {
        title: "Nova 4090 roda tudo!",
        description: "Não existe placa de vídeo mais potente, a nova 4090 roda tudo e mais um pouco!",
        date: "11/08/2023",
        image_url: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg"
    },
    {
        title: "Novo avanço tecnológico promete revolucionar a indústria automotiva",
        description: "Uma nova tecnologia promete transformar a maneira como nos locomovemos. Pesquisadores desenvolveram um sistema de propulsão híbrida inovador que promete aumentar a eficiência dos veículos em até 50%. Saiba mais sobre essa descoberta revolucionária e como ela pode impactar o futuro dos carros elétricos.",
        date: "19/08/2023",
        image_url: "https://mobilidade.estadao.com.br/wp-content/uploads/2022/11/tecnologia-na-industria-automobilistica.jpg"
    },
]

export const GamesData: IGame[] = [
    {
        title: "DOOM: 3",
        normal_price: 39.90,
        actual_price: 15.60,
        url_image: "https://cdn1.epicgames.com/offer/7f1853beef0a4b40827038d0f47606f3/EGS_DOOM3_idSoftwarePanicButton_S1_2560x1440-e29ea97ef0c5689b6ee1b5ae12d9a1bb"
    },
    {
        title: "Patron",
        normal_price: 37.99,
        actual_price: 18.99,
        url_image: "https://cdn1.epicgames.com/spt-assets/b4378b72b9214bd6900cdf0c8ae23d0f/patron-offer-1fom9.jpg"
    },
]

export const MostReads: IMostRead[] = [
    {
        title: "Has Xbox really lost the console wars?",
        category: "Games",
        url_image: "https://assets-prd.ignimgs.com/2022/11/23/xboxseriesx-3-blogroll-1648735732292-1669247511678.jpeg",
    },
    {
        title: "White House announces $40 billion in broadband funding",
        category: "Politica",
        url_image: "https://techcult.com/wp-content/uploads/2023/06/bridging-the-digital-divide-white-house-unveils-h.png",
    },
    {
        title: "Making sense of the EU’s fight for user-replaceable smartphone batteries",
        category: "Informatica",
        url_image: "https://external-preview.redd.it/eu-smartphones-must-have-user-replaceable-batteries-by-2027-v0-CePuASEWf4SdQEholzc4M833jMEEaXIdijcbo-yC0Gk.jpg?auto=webp&s=fbeb5701c9bb4dbf0a7ec55bbe83842985869c8d",
    },
    {
        title: "Formula E team caught using RFID scanner that could grab live tire data from other cars",
        category: "Automobilistica",
        url_image: "https://ic-cdn.flipboard.com/motorsport.com/3ce369724ad190f04c8e650eca47782a4daddd8b/_xlarge.webp",
    },
    {
        title: "How to tell everyone on Gmail if you’re in — or not",
        category: "Curiosidades",
        url_image: "https://static.bundle.app/news/0lqcdkgq.tic.jpg",
    },
]

export const PostsCardData: IPostCardData[] = [
    {
        title: "Has Xbox really lost the console wars?",
        category: "Games",
        url_image: "https://assets-prd.ignimgs.com/2022/11/23/xboxseriesx-3-blogroll-1648735732292-1669247511678.jpeg",
        author: "Marco Aurélio",
        post_date: "31 Jul"
    },
    {
        title: "White House announces $40 billion in broadband funding",
        category: "Politica",
        url_image: "https://techcult.com/wp-content/uploads/2023/06/bridging-the-digital-divide-white-house-unveils-h.png",
        author: "Marco Aurélio",
        post_date: "31 Jul"
    },
    {
        title: "Making sense of the EU’s fight for user-replaceable smartphone batteries",
        category: "Informatica",
        url_image: "https://external-preview.redd.it/eu-smartphones-must-have-user-replaceable-batteries-by-2027-v0-CePuASEWf4SdQEholzc4M833jMEEaXIdijcbo-yC0Gk.jpg?auto=webp&s=fbeb5701c9bb4dbf0a7ec55bbe83842985869c8d",
        author: "Marco Aurélio",
        post_date: "31 Jul"
    },
    {
        title: "Formula E team caught using RFID scanner that could grab live tire data from other cars",
        category: "Automobilistica",
        url_image: "https://ic-cdn.flipboard.com/motorsport.com/3ce369724ad190f04c8e650eca47782a4daddd8b/_xlarge.webp",
        author: "Marco Aurélio",
        post_date: "31 Jul"
    },
    {
        title: "How to tell everyone on Gmail if you’re in — or not",
        category: "Curiosidades",
        url_image: "https://static.bundle.app/news/0lqcdkgq.tic.jpg",
        author: "Marco Aurélio",
        post_date: "31 Jul"
    },
]