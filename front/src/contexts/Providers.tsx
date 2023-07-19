import { ReactNode } from "react"
import { LoadingProvider } from "./LoadingContext"
import { UserProvider } from "./UserContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <LoadingProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </LoadingProvider>
    )
}

export default Providers