import styles from './Logo.module.css'
import {FC} from 'react'

function Logo():FC {
    return (
        <div className={styles.logo}>Bloggers Community</div>
    )
}

export default Logo