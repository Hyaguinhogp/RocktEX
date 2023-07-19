import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import DefaultPageComponent from "../../components/DefaultPageComponent";
import { AuthenticationContainer, AuthenticationContent, MobileTitleContainer } from "./styles";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { loadingContext } from "../../contexts/LoadingContext";
import { toast } from "react-hot-toast";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { userContext } from "../../contexts/UserContext";

interface IAuthenticationPageProps {
    type: "register" | "login"
}

interface FormValues {
    username?: string
    email: string
    password: string
};

const registerSchema = yup.object().shape({
    username: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
});

const loginSchema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
});

const AuthenticationPage = ({ type }: IAuthenticationPageProps) => {

    const title = type == "register" ? "Cadastro" : "Login";
    const schema = type == "register" ? registerSchema : loginSchema;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { activeIsLoading, desactiveIsLoading } = useContext(loadingContext);
    const { login } = useContext(userContext);
    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data: FormValues) => {
        activeIsLoading();
        if(type == "register") {
            api.post("/accounts/", data)
                .then((response) => {
                    toast.success("Usuario cadastrado com sucesso!", { iconTheme: { primary: "#007BFF", secondary: "white" }});
                    desactiveIsLoading();
                    navigate("/login");
                })
                .catch(() => {
                    toast.error("Algo deu errado!");
                    desactiveIsLoading();
                })
        }
        else {
            api.post("/login/", data)
            .then((response) => {
                toast.success("Login efetuado com sucesso!", { iconTheme: { primary: "#007BFF", secondary: "white" }});
                localStorage.setItem("@RTX_token", response.data.access);
                login();
                desactiveIsLoading();
                navigate("/home");
            })
            .catch(() => {
                toast.error("Algo deu errado!");
                desactiveIsLoading();
            })
        }
    };

    const handlePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <DefaultPageComponent>
            <MobileTitleContainer>
                <h1>{title}</h1>
            </MobileTitleContainer>
            <AuthenticationContainer>
                <AuthenticationContent>
                    <div className="left-container">
                        <h1>Seja bem vindo!</h1>
                        <h3>
                            Registre-se ou faça login para ficar por dentro das últimas notícias sobre tecnologia e jogos,
                            além de aproveitar as promoções disponíveis no mundo dos games!
                        </h3>
                    </div>
                    <form className="right-container" onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputs-container">
                            <h2 className="desktop-auth-title">{title}</h2>

                            {type == "register" && 
                                <>
                                    <div className="input-container">
                                        <AiOutlineUser />
                                        <input type="text" placeholder="Nome" {...register("username")} />
                                    </div>
                                    <p>{errors.username?.message}</p>
                                </>
                            }

                            <div className="input-container">
                                <HiOutlineMail />
                                <input type="email" placeholder="Email" {...register("email")} />
                            </div>
                            <p>{errors.email?.message}</p>

                            <div className="input-container">
                                <BiLockAlt />
                                <input type={isPasswordVisible ? "text" : "password"} placeholder="Senha" {...register("password")} />
                                {isPasswordVisible ? 
                                    <AiFillEye onClick={() => handlePasswordVisible()} />
                                    :
                                    <AiFillEyeInvisible onClick={() => handlePasswordVisible()} />
                                }
                            </div>
                            <p>{errors.password?.message}</p>

                            {type == "register" ?
                                <h3>Já tem uma conta? <Link to="/login">Faça login</Link> </h3>
                                :
                                <h3>Ainda não tem uma conta? <Link to="/register">Cadastre-se agora</Link> </h3>
                            }
                        </div>

                        <div className="continue-container">
                            <button type="submit" className="continue-button">Continuar</button>
                        </div>
                    </form>
                </AuthenticationContent>
            </AuthenticationContainer>
        </DefaultPageComponent>
    )
}

export default AuthenticationPage;