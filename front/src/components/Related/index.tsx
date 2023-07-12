import { RelatedContainer, RelatedContent } from "./styles";

const Related = () => {
    return (
        <RelatedContainer>
            <h2 className="related-title">Relacionados</h2>
            <RelatedContent>
                <h3 className="related line">
                    Euclid: telescópio parceiro do James Webb chega ao espaço via SpaceX
                </h3>
                <h3 className="related line">
                    Euclid | Telescópio que vai estudar matéria escura é lançado pela SpaceX
                </h3>
                <h3 className="related">
                    Euclides lançado com sucesso para estudar o lado escuro do Universo
                </h3>
            </RelatedContent>
        </RelatedContainer>
    )
}

export default Related;