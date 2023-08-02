import DefaultPageComponent from "../../components/DefaultPageComponent";
import { ProfileBottomContent, ProfileContainer, ProfileTopContent } from "./styles";
import { BiEdit } from "react-icons/bi"
import { ReactComponent as Linkedin } from "../../assets/linkedin_icon.svg"
import { ReactComponent as Instagram } from "../../assets/instagram_icon.svg"
import { ReactComponent as Twitter } from "../../assets/twiter_icon.svg"
import ProfilePost from "../../components/PostCard";
import { useContext, useEffect, useRef, useState } from "react";
import { PostsCardData } from "../../database";
import { userContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const ProfileTopContentRef = useRef<HTMLDivElement>(null);
    const [ProfileBottomContentMinHeight, setProfileBottomContentMinHeight] = useState(0);
    const { checkToken } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!checkToken()) {
            //navigate("/register");
        }
        setProfileBottomContentMinHeight(window.innerHeight - (ProfileTopContentRef.current!.offsetHeight + 62));
    }, [])

    return (
        <DefaultPageComponent>
            <ProfileContainer>
                <ProfileTopContent ref={ProfileTopContentRef}>
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
                <ProfileBottomContent minHeight={ProfileBottomContentMinHeight}>
                    <div className="profile-posts">
                        {
                            PostsCardData.map((post, index) => <ProfilePost key={index + 1} postData={post} isProfileAndOwner />)
                        }
                    </div>
                </ProfileBottomContent>
            </ProfileContainer>
        </DefaultPageComponent>
    )
}

export default Profile;