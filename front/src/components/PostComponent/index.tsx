import { PostComponentContainer, PostComponentContent } from "./styles";

const PostComponent = () => {
    return (
        <PostComponentContainer>
            <PostComponentContent>
                <h3 className="post-date">16 jun 2023</h3>
                <h2 className="post-title">
                    Blue Origin quer construir centros de lançamento de foguetes fora dos EUA para competir com SpaceX
                </h2>
                <h3 className="post-author">por<span className="post-author__name">Hyago Matos</span></h3>
                <div className="post-image__container">
                    <figure className="post-image"></figure>
                    <h4 className="post-image__description">Imagem ilustrativa, Blue Origin</h4>
                </div>
                <h3 className="post-text">
                    A Blue Origin, companhia de serviços de voo espacial fundada pelo criador da Amazon, Jeff Bezos, anunciou um plano para expandir suas operações para regiões além dos Estados Unidos, incluindo a Europa. Para isso, a empresa de pretende instalar novos centros de lançamentos de foguetes ao redor do globo.
                    Com escritórios nos estados do Alabama, Flórida, Texas e Washington, a Blue Origin ainda não divulgou as áreas de interesse para a estratégia de expansão, mas afirma estar buscando novas aquisições e parcerias internacionais para ampliar sua experiência na indústria de componentes espaciais e software.
                </h3>
                <div className="post-image__container">
                    <figure className="post-image"></figure>
                    <h4 className="post-image__description">Imagem ilustrativa, Blue Origin</h4>
                </div>
                <h3 className="post-text">
                    “Estamos procurando tudo o que podemos fazer para adquirir, escalar para atender melhor nossos clientes”, disse Bob Smith, CEO da Blue Origin, em entrevista ao Financial Times. “Não é uma questão de tamanho, mas de quanto isso pode acelerar nosso roteiro do que estamos planejando fazer”, continuou o executivo.
                    Recentemente, a Blue Origin comprou a Honeybee Robotics, uma empresa de desenvolvimento e produção de robôs voltados à exploração planetária, medicina e outras aplicações. A aquisição foi parte de uma iniciativa com investimento de US$ 3,4 bilhões para a construção de um módulo lunar que contribuirá para a missão Artemis da NASA.
                    O objetivo é ampliar o poder de concorrência da empresa contra a SpaceX, companhia de serviços espaciais de Elon Musk, que está fornecendo soluções para as missões lunares.
                    Embora a Blue Origin tenha sido a primeira a lançar, pousar e reutilizar um foguete com sucesso, a empresa ficou atrás da rival após adiamentos de produção. Com a expansão global, é possível que a empresa “irmã” da Amazon avance tecnologicamente e tenha maiores chances para competir com o progresso da SpaceX.
                </h3>

                <div className="post-categories">
                    <h3 className="post-category">Tecnologia</h3>
                    <h3 className="post-category">Espaço</h3>
                </div>

            </PostComponentContent>
        </PostComponentContainer>
    )
}

export default PostComponent;