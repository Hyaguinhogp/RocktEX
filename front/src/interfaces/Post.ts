import { IUser } from "./User"

export interface IPostBase {
    title: string
    category: string
    author: IUser
    post_date: string
}

export interface IPost extends IPostBase {
    complete_post: string
}

export interface IPostCardData extends IPostBase {
    url_image: string
}