import { CategoryContainer } from "./styles";

interface ICategoryProps {
    category: string
    color?: "white" | "black"
}

const Category = ({ category, color="white" }: ICategoryProps) => {
    return (
        <CategoryContainer color={color}>
            <span>{category}</span>
        </CategoryContainer>
    )
}

export default Category;