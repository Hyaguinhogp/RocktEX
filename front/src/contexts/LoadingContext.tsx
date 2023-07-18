import { createContext, ReactNode, useState } from "react"

interface ILoadingData {
    isLoading: boolean
    activeIsLoading: () => void
    desactiveIsLoading: () => void
}

interface ILoadingProps {
    children: ReactNode
}

export const loadingContext = createContext<ILoadingData>({} as ILoadingData)

export const LoadingProvider = ({ children }: ILoadingProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const activeIsLoading = () => {
        setIsLoading(true);
    }

    const desactiveIsLoading = () => {
        setIsLoading(false);
    }

    return (
        <loadingContext.Provider value={{ isLoading, activeIsLoading, desactiveIsLoading }}>
            {children}
        </loadingContext.Provider>
    )
}