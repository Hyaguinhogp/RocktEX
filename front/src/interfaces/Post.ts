export interface IPostBase {
    title: string
    category: string
    author: string
    post_date: string
}

export interface IPost extends IPostBase {
    complete_post: string
}

export interface IPostCardData extends IPostBase {
    url_image: string
}