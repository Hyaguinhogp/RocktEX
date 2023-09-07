import { FooterContainer, FooterContent } from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <div className="footer-column">
                    <h2 className="footer-title">RocktEX</h2>
                    <h3 className="footer-column__item">
                        Este é um projeto pessoal com o intuito de testar e comprovar meu conhecimento
                        em desenvolvmento web
                    </h3>
                </div>

                <div className="footer-column">
                    <h2 className="footer-column__title">Contato</h2>
                    <a href="https://wa.me/92991271930" className="footer-column__item">Whatsapp</a>
                    <h3 className="footer-column__item">hyago.v.a.m@gmail.com</h3>
                </div>

                <div className="footer-column">
                    <h2 className="footer-column__title">Social</h2>
                    <a href="https://instagram.com/hyaguinhogp" className="footer-column__item">Instagram</a>
                    <a href="https://www.linkedin.com/in/hyago-matos/" className="footer-column__item">Linkedin</a>
                    <a href="https://github.com/Hyaguinhogp" className="footer-column__item">GitHub</a>
                </div>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;