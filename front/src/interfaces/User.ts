import { JwtPayload } from "jwt-decode"

export interface IUser {
    id: number
    username: string
    email: string
    password: string
}

export interface IUserPayload extends JwtPayload {
    user_id: string
}