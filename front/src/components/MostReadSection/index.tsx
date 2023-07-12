import { ReactNode } from "react";
import { MostReadSectionContainer, MostReadSectionContent } from "./styles";

interface IMostReadSectionProps {
    children: ReactNode
}

const MostReadSection = ({ children }: IMostReadSectionProps) => {
    return (
        <MostReadSectionContainer>
            <MostReadSectionContent>
                {children}
            </MostReadSectionContent>
        </MostReadSectionContainer>
    )
}

export default MostReadSection;