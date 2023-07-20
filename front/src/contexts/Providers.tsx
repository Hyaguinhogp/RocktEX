import { ReactNode } from "react"
import { LoadingProvider } from "./LoadingContext"
import { ConfirmationModalProvider } from "./ConfirmationModalContext"
import { UserProvider } from "./UserContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <LoadingProvider>
            <ConfirmationModalProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </ConfirmationModalProvider>
        </LoadingProvider>
    )
}

export default Providers