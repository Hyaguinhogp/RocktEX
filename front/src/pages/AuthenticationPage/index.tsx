import { ReactNode } from "react";
import DefaultPageComponent from "../../components/DefaultPageComponent";
import { AuthenticationContainer, AuthenticationContent, MobileTitleContainer } from "./styles";
import { AiOutlineUser } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { BiLockAlt } from "react-icons/bi"

interface IAuthenticationPageProps {
    type: "register" | "login"
}

const AuthenticationPage = ({ type }: IAuthenticationPageProps) => {

    return (
        <DefaultPageComponent>
            <MobileTitleContainer>
                <h1>{type == "register" ? "Cadastro" : "Login"}</h1>
            </MobileTitleContainer>
            <AuthenticationContainer>
                <AuthenticationContent>
                    <div className="inputs-container">
                        <div className="input-container">
                            <AiOutlineUser />
                            <input type="text" placeholder="Nome" />
                        </div>

                        <div className="input-container">
                            <HiOutlineMail />
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="input-container">
                            <BiLockAlt />
                            <input type="password" placeholder="Senha" />
                        </div>

                        <h3>Já tem uma conta? <a>Faça login</a> </h3>
                    </div>

                    <div className="continue-container">
                        <button className="continue-button">Continuar</button>
                    </div>
                </AuthenticationContent>
            </AuthenticationContainer>
        </DefaultPageComponent>
    )
}

export default AuthenticationPage;