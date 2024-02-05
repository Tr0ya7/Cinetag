import { useFavoriteContext } from '../common'
import styles from '../styles/pages/favorites.module.scss'
import Banner from '../components/banner'
import Card from '../components/card'
import Title from '../components/title'

export default function Favorites() {
    const { favorite } = useFavoriteContext()

    return (
        <>
            <Banner image="favoritos" />
            <Title>
                <h1>
                    Meus Favoritos
                </h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((item) => <Card {...item} key={item.id} />)}
            </section>
        </>
    )
}