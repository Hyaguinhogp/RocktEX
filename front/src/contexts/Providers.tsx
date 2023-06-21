import { ReactNode } from "react"
import { ExampleProvider } from "./ExampleContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <ExampleProvider>
            {children}
        </ExampleProvider>
    )
}

export default Providers