import styles from '../styles/components/navBarLink.module.scss'
import { Link } from 'react-router-dom'

export default function NavBarLink({ to, children }) {
    return <Link to={ to } className={styles.link}>{ children }</Link>
}