import styles from '../styles/components/title.module.scss'

export default function Title({ children }) {
    return <div className={styles.title}>{ children }</div>
}