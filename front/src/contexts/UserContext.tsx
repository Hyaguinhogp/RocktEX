import { createContext, ReactNode, useState } from "react"
import { IUser, IUserPayload } from "../interfaces/User"
import jwt_decode, { JwtPayload } from "jwt-decode"
import api from "../services/api"

interface IUserProviderData {
    user: IUser
    checkToken: () => boolean
    login: () => void
    exit: () => void
}

interface IUserProviderProps {
    children: ReactNode
}

export const userContext = createContext<IUserProviderData>({} as IUserProviderData)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const checkToken = () => {
        const token = localStorage.getItem("@RTX_token");
        if(token) {
            const decodedToken: IUserPayload = jwt_decode(token!);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp! > currentTime) {
                return true;
            }
            return false;
        }
        return false;
    }

    const login = () => {
        const token = localStorage.getItem("@RTX_token");
        const decodedToken: IUserPayload = jwt_decode(token!);
        if(decodedToken) {
            const user_id = decodedToken.user_id;
            api.get(`/accounts/${user_id}/`)
                .then((response) => {
                    setUser(response.data);
                })
        }
    }

    const exit = () => {
        setUser({} as IUser);
        localStorage.removeItem("@RTX_token");
    }

    return (
        <userContext.Provider value={{ user, login, checkToken, exit }}>
            {children}
        </userContext.Provider>
    )
}