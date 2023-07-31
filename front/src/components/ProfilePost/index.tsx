import { ProfilePostContent } from "./styles";
import { BiEdit } from "react-icons/bi"

interface IProfilePostProps {
    url_image: string
    title: string
}

const ProfilePost = ({ url_image, title }: IProfilePostProps) => {
    return (
        <ProfilePostContent url_image={url_image}>
            <div className="post-image"></div>
            <div className="post-title">{title}</div>
            <BiEdit />
        </ProfilePostContent>
    )
}

export default ProfilePost;