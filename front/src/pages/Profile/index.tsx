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
import { MdOutlineAddCircle } from "react-icons/md"

const Profile = () => {

    const ProfileTopContentRef = useRef<HTMLDivElement>(null);
    const [ProfileBottomContentMinHeight, setProfileBottomContentMinHeight] = useState(0);
    const { checkToken, user } = useContext(userContext);
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
                            <h2 className="profile-name">{user.username ? user.username : "Marco Aurélio"}</h2>
                            {/* <h3 className="profile-description">{user.biography}</h3> */}
                            <textarea className="biography-input" placeholder="Adicione uma biografia"></textarea>
                        </div>
                        <BiEdit className="profile-edit-button" />
                    </div>
                    <div className="profile-social">
                        {user.social_media.map((social_media) => {
                            if(social_media.social_media_type == "linkedin") return <a href={`https://www.linkedin.com/in/${user.social_media}/`}><Linkedin /></a>
                            if(social_media.social_media_type == "instagram") return <a href={`https://www.instagram.com/${user.social_media}/`}><Instagram /></a>
                            if(social_media.social_media_type == "twitter") return <a href={`https://twitter.com/${user.social_media}`}><Twitter /></a>
                        })}
                        <MdOutlineAddCircle />

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