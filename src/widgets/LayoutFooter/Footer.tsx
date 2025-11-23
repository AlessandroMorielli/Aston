import styles from './Footer.module.css'
import {FC} from 'react'

function Footer():FC {

    return (
        <footer className={styles.footer}>
            <div>
                <a href="#">Privacy Policy</a>
                <span> | </span>
                <a href="#">Terms & Conditions</a>
            </div>
            <div>All Copyrights (C) 2025 Reserved</div>
        </footer>
    )
}

export default Footer