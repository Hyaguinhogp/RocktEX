import { CategoryContainer } from "./styles";

interface ICategoryProps {
    category: string
}

const Category = ({ category }: ICategoryProps) => {
    return (
        <CategoryContainer>
            <span>{category}</span>
        </CategoryContainer>
    )
}

export default Category;