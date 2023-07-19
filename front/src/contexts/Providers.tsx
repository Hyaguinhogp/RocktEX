import { ReactNode } from "react"
import { LoadingProvider } from "./LoadingContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <LoadingProvider>
            {children}
        </LoadingProvider>
    )
}

export default Providers