import { useParams } from 'react-router-dom'
import styles from '../styles/pages/player.module.scss'
import Banner from '../components/banner'
import Title from '../components/title'
import Movies from '../json/db.json'
import NotFound from './404'

export default function Player() {
    const params = useParams() //pega valor da url e coloca em uma variável/constante
    const movie = Movies.find((item) => item.id === Number(params.id)) //procura o valor com o id expecífico da url inserida
    
    if (!movie) {
        return <NotFound />
    }

    return (
        <>
            <Banner image="player" />
            <Title>
                <h1>
                    Player
                </h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={movie.link}
                    title={movie.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share"
                    allowfullscreen
                />
            </section>
        </>
    )
}