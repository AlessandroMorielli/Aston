import styles from './MainLayout.module.css'
import {Outlet} from 'react-router-dom'
import {FC} from 'react'

function MainLayout():FC {
    return (
        <main className={styles.main}>
            <Outlet/>
        </main>
    )
}

export default MainLayout