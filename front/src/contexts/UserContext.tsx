import { createContext, ReactNode, useState } from "react"
import { IUser } from "../interfaces/User"
import jwt_decode from "jwt-decode"

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
        console.log("começo");
        const token = localStorage.getItem("@RTX_token");
        console.log(token);
        const decodedToken = jwt_decode(token!);
        if(decodedToken) {
            console.log(decodedToken);
        }
        console.log(decodedToken);
        console.log("fim");
    }

    return (
        <userContext.Provider value={{ user, login }}>
            {children}
        </userContext.Provider>
    )
}