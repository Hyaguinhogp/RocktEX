import { JwtPayload } from "jwt-decode"

export interface IUser {
    id: number
    username: string
    email: string
    biography: string
    social_media: ISocialMedia[]
    password: string
}

export interface IUserPayload extends JwtPayload {
    user_id: string
}

interface ISocialMedia {
    social_media_type: "twitter" | "linkedin" | "instagram"
    socidal_media_handle: string
}