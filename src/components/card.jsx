import styles from '../styles/components/card.module.scss'
import { useFavoriteContext } from '../common'
import { Link } from 'react-router-dom'

export default function Card({ id, src, title }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((favItem) => favItem.id === id)
    const icon = !isFavorite ? '/favorite.png' : '/unFavorite.png'
    
    return (
        <div className={styles.card}>
            <Link to={`/${ id }`}>
                <img className={ styles.src } src={ src } alt={ title } />
                <h2>
                    { title }
                </h2>
            </Link>
            <img
                className={styles.favorite} 
                src={icon}
                alt="favorite"
                onClick={() => addFavorite({ id, src, title })}
            />
        </div>
    )
}