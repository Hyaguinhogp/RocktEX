import { IGame } from "../interfaces/Games";
/* import { IHighligt } from "../interfaces/Highlights";
import { IMostRead } from "../interfaces/MostReads";
import { IPost, IPostCardData } from "../interfaces/Post";
import { IUser } from "../interfaces/User";
import api from "../services/api"; */

/* export const HighlightsData: IHighligt[] = [
    {
        title: "SpaceX lança novo foguete que promete revolucionar a viagem espacial!",
        description: "O novo foguete é repleto de detalhes e tem destino à Marte! ...",
        date: "17 Jul",
        image_url: "https://segredosdomundo.r7.com/wp-content/uploads/2020/06/spacex-historia-pioneirismo-e-exploracao-sustentavel-11.jpg"
    },
    {
        title: "Nova RTX 4090 roda tudo! A mais nova Placa da Nvidia promete 4k a 60fps em qualquer game",
        description: "Não existe placa de vídeo mais potente, a nova 4090 roda tudo e mais um pouco!",
        date: "11 Jul",
        image_url: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg"
    },
    {
        title: "Novo avanço tecnológico promete revolucionar a indústria automotiva",
        description: "Uma nova tecnologia promete transformar a maneira como nos locomovemos. Pesquisadores desenvolveram um sistema de propulsão híbrida inovador que promete aumentar a eficiência dos veículos em até 50%. Saiba mais sobre essa descoberta revolucionária e como ela pode impactar o futuro dos carros elétricos.",
        date: "19 Jul",
        image_url: "https://mobilidade.estadao.com.br/wp-content/uploads/2022/11/tecnologia-na-industria-automobilistica.jpg"
    },
] */

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

/* export const MostReads: IMostRead[] = [
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

const User: IUser = {
    username: "Marco Aurélio",
    biography: "bio",
    email: "marco@mail.com",
    id: 1,
    password: "password",
    social_media: [{social_media_type: "instagram", socidal_media_handle: "instagram"}]
}

export const PostsCardData: IPostCardData[] = [
    {
        title: "Has Xbox really lost the console wars?",
        category: "Games",
        url_image: "https://assets-prd.ignimgs.com/2022/11/23/xboxseriesx-3-blogroll-1648735732292-1669247511678.jpeg",
        author: User,
        post_date: "31 Jul"
    },
    {
        title: "White House announces $40 billion in broadband funding",
        category: "Politica",
        url_image: "https://techcult.com/wp-content/uploads/2023/06/bridging-the-digital-divide-white-house-unveils-h.png",
        author: User,
        post_date: "31 Jul"
    },
    {
        title: "Making sense of the EU’s fight for user-replaceable smartphone batteries",
        category: "Informatica",
        url_image: "https://external-preview.redd.it/eu-smartphones-must-have-user-replaceable-batteries-by-2027-v0-CePuASEWf4SdQEholzc4M833jMEEaXIdijcbo-yC0Gk.jpg?auto=webp&s=fbeb5701c9bb4dbf0a7ec55bbe83842985869c8d",
        author: User,
        post_date: "31 Jul"
    },
    {
        title: "Formula E team caught using RFID scanner that could grab live tire data from other cars",
        category: "Automobilistica",
        url_image: "https://ic-cdn.flipboard.com/motorsport.com/3ce369724ad190f04c8e650eca47782a4daddd8b/_xlarge.webp",
        author: User,
        post_date: "31 Jul"
    },
    {
        title: "How to tell everyone on Gmail if you’re in — or not",
        category: "Curiosidades",
        url_image: "https://static.bundle.app/news/0lqcdkgq.tic.jpg",
        author: User,
        post_date: "31 Jul"
    },
]

export const Posts: IPost[] = [
    {
        title: "Blue Origin quer construir centros de lançamento de foguetes fora dos EUA para competir com SpaceX",
        category: "Espaço",
        author: User,
        post_date: "16 jun 2023",
        complete_post: 
            `i(https://t2.tudocdn.net/674421?w=646&h=284---Imagem ilustrativa, Blue Origin)
            t(A Blue Origin, companhia de serviços de voo espacial fundada pelo criador da Amazon, Jeff Bezos, anunciou um plano para expandir suas operações para regiões além dos Estados Unidos, incluindo a Europa. Para isso, a empresa de pretende instalar novos centros de lançamentos de foguetes ao redor do globo. Com escritórios nos estados do Alabama, Flórida, Texas e Washington, a Blue Origin ainda não divulgou as áreas de interesse para a estratégia de expansão, mas afirma estar buscando novas aquisições e parcerias internacionais para ampliar sua experiência na indústria de componentes espaciais e software.)
            i(https://t2.tudocdn.net/674421?w=646&h=284---Imagem ilustrativa, Blue Origin)
            t(“Estamos procurando tudo o que podemos fazer para adquirir, escalar para atender melhor nossos clientes”, disse Bob Smith, CEO da Blue Origin, em entrevista ao Financial Times. “Não é uma questão de tamanho, mas de quanto isso pode acelerar nosso roteiro do que estamos planejando fazer”, continuou o executivo. Recentemente, a Blue Origin comprou a Honeybee Robotics, uma empresa de desenvolvimento e produção de robôs voltados à exploração planetária, medicina e outras aplicações. A aquisição foi parte de uma iniciativa com investimento de US$ 3,4 bilhões para a construção de um módulo lunar que contribuirá para a missão Artemis da NASA. O objetivo é ampliar o poder de concorrência da empresa contra a SpaceX, companhia de serviços espaciais de Elon Musk, que está fornecendo soluções para as missões lunares. Embora a Blue Origin tenha sido a primeira a lançar, pousar e reutilizar um foguete com sucesso, a empresa ficou atrás da rival após adiamentos de produção. Com a expansão global, é possível que a empresa “irmã” da Amazon avance tecnologicamente e tenha maiores chances para competir com o progresso da SpaceX.)`
    }
] */