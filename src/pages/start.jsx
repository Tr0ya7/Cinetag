import Banner from '../components/banner'
import Card from '../components/card'
import Title from '../components/title'
import Movies from '../json/db.json'
import styles from '../styles/pages/start.module.scss'

export default function Start() {
    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>
                    Um lugar para guardar seus filmes
                </h1>
            </Title>
            <section className={styles.container}>
                {Movies.map((movie) => <Card {...movie} src={movie.poster} key={movie.id} />)} {/*é importante que o card receba o valor como sprat = ...movie para que o valor do id e todos os valores sejam passados para o componente*/}
            </section>
        </>
    )
}