import { PresentationContainer, PresentationContent } from "./styles";
import Image from "../../assets/img4.png"

const Presentation = () => {
    return (
        <PresentationContainer>
            <PresentationContent>
                <div className="presentation-image__container"></div>
                <div className="presentation-text">
                    <h1>RocktEX</h1>
                    <h2>
                        Bem-vindo ao nosso blog de tecnologia e games! Aqui, mergulhamos nas últimas novidades, 
                        análises aprofundadas e curiosidades empolgantes. Junte-se a nós nessa jornada pela vanguarda digital!
                    </h2>
                </div>
            </PresentationContent>
        </PresentationContainer>
    )
}

export default Presentation;