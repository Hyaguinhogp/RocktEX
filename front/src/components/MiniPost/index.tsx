import { MiniPostContent } from "./styles";

const MiniPost = () => {
    return (
        <MiniPostContent>
            <figure className="mini-post__image"></figure>
            <h2 className="mini-post__title">Submario é apreendido com quase<span className="blue">4 toneladas</span>de cocaína</h2>
            <h3 className="mini-post__text">
                Um submarino foi apreendido com 3,5 toneladas de cocaína no Oceano Pacífico, enquanto navegava pelo estado da Baixa Califórnia, no México. Na embarcação, havia cinco pessoas e todas foram presas, de acordo com informações da Marinha do México.<br />
                A apreensão foi submarino aconteceu na terça-feira (27) e só foi divulgada pela Marinha na sexta-feira (30). No interior da embarcação, autoridades encontraram 186 pacotes de cocaína.<br />
                A Marinha mexicana informou que o narcossubmarino é o maior já apreendido pelo país. A embarcação tem 26 metros, dois motores internos e tem capacidade velocidade média de 8 km/h.
            </h3>
            <div className="mini-post__user">
                <div className="user-image">T</div>
                <h3 className="user-name">Tobim Joaquim</h3>
            </div>
        </MiniPostContent>
    )
}

export default MiniPost;