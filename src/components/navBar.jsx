import styles from '../styles/components/navBar.module.scss'
import { Link } from 'react-router-dom'
import NavBarLink from './navBarLink'

export default function NavBar() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/logo.png" alt="logo" />
            </Link>
            <nav>
                <NavBarLink to="/">
                    Home
                </NavBarLink>
                <NavBarLink to="/Favoritos">
                    Favoritos
                </NavBarLink>
            </nav>
        </header>
    )
}