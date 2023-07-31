import DefaultPageComponent from "../../components/DefaultPageComponent";
import { ProfileBottomContent, ProfileContainer, ProfileTopContent } from "./styles";
import { BiEdit } from "react-icons/bi"
import { ReactComponent as Linkedin } from "../../assets/linkedin_icon.svg"
import { ReactComponent as Instagram } from "../../assets/instagram_icon.svg"
import { ReactComponent as Twitter } from "../../assets/twiter_icon.svg"
import ProfilePost from "../../components/ProfilePost";

const Profile = () => {

    return (
        <DefaultPageComponent>
            <ProfileContainer>
                <ProfileTopContent>
                    <div className="profile-info">
                        <div className="profile-image"></div>
                        <div className="profile-text">
                            <h2 className="profile-name">Marco Aurélio</h2>
                            <h3 className="profile-description">
                                Marco Aurélio foi o imperador romano de 161 até sua morte. Era filho de Domícia Lucila e do pretor Marco Ânio Vero,
                                sobrinho do imperador Adriano.
                            </h3>
                        </div>
                        <BiEdit className="profile-edit-button" />
                    </div>
                    <div className="profile-social">
                        <Linkedin />
                        <Instagram />
                        <Twitter />
                    </div>
                    <div className="profile-options">
                        <h3 className="profile-option selected">Posts</h3>
                        <h3 className="profile-option">Comentários</h3>
                    </div>
                </ProfileTopContent>
                <ProfileBottomContent>
                    <div className="profile-posts">
                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />

                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />

                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />

                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />

                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />

                        <ProfilePost
                            url_image="https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-lancamento-de-foguete.jpg"
                            title="Como funciona o lançamento de um foguete" />
                    </div>
                </ProfileBottomContent>
            </ProfileContainer>
        </DefaultPageComponent>
    )
}

export default Profile;