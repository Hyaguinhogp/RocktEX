import { useEffect, useState } from "react";
import { CategoriesPanelContent, RandomSpan } from "./styles";
import { motion } from "framer-motion"

const CategoriesPanel = () => {

    const animation = {
        initial: {
            x: "0%"
        },
        animate: {
            x: "-80%"
        },
    }

    const categories = [
        "Nvidia",
        "Notebooks",
        "RealidadeVirtual",
        "Streaming",
        "InteligênciaArtificial",
        "WebGL",
        "Desenvolvimento",
        "Multiplayer",
        "Física",
        "Engines",
        "Jogabilidade",
        "Animação",
        "Aumentada",
        "Mobile",
        "FrontEnd",
        "BackEnd",
        "Aventura",
        "RPG",
        "Tiro",
        "Estratégia",
        "QuebraCabeças",
        "Esportes",
        "Corrida",
        "Sobrevivência",
        "Terror",
        "Educativos",
        "Simulação",
        "Música",
        "Plataforma",
        "Retro",
        "Indie",
        "Cartas",
        "Tabuleiro",
        "Construção",
        "Lógica",
        "Incrementais",
        "Clicker",
        "Cooperativos",
        "Competitivos",
        "PixelArt",
        "Gráficos3D",
        "Ficção",
        "Fantasia",
        "Guerra",
        "História",
        "Arte",
        "Narrativa",
    ];

    const [lines, SetLines] = useState<Array<Array<string>>>([] as Array<Array<string>>)

    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            const content = [];
            for (let j = 0; j < 20; j++) {
                content.push(categories[Math.floor(Math.random() * categories.length)]);
            }
            lines.push(content);
        }
    }, [lines])

    return (
        <CategoriesPanelContent>
            {lines.map((line, index) => (
                <motion.div {...animation} transition={{duration: 15, ease: "linear", repeat: Infinity}} className="line" key={index}>{
                    line.map((content, idx) => <h2 className="content"><RandomSpan>{content}</RandomSpan>{" ◦ "}</h2>)
                }</motion.div>
            ))}
        </CategoriesPanelContent>
    )
}

export default CategoriesPanel;