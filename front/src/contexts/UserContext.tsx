import { createContext, ReactNode, useState } from "react"
import { IUser, IUserPayload } from "../interfaces/User"
import jwt_decode from "jwt-decode"
import api from "../services/api"

interface IUserProviderData {
    user: IUser
    login: () => void
}

interface IUserProviderProps {
    children: ReactNode
}

export const userContext = createContext<IUserProviderData>({} as IUserProviderData)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const login = () => {
        const token = localStorage.getItem("@RTX_token");
        const decodedToken: IUserPayload = jwt_decode(token!);
        if(decodedToken) {
            const user_id = decodedToken.user_id;
            api.get(`/accounts/${user_id}/`)
                .then((response) => {
                    console.log(response.data);
                    setUser(response.data);
                })
        }
    }

    return (
        <userContext.Provider value={{ user, login }}>
            {children}
        </userContext.Provider>
    )
}