import { createContext, ReactNode, useState } from "react"

interface IExampleData {
    actualPage: string
    setActualPage: React.Dispatch<React.SetStateAction<string>>
}

interface IExampleProps {
    children: ReactNode
}

export const exampleContext = createContext<IExampleData>({} as IExampleData)

export const ExampleProvider = ({ children }: IExampleProps) => {

    const [actualPage, setActualPage] = useState("Home");

    return (
        <exampleContext.Provider value={{ actualPage, setActualPage }}>
            {children}
        </exampleContext.Provider>
    )
}