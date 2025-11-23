import styles from './User.module.css'
import {FC} from 'react'

function User({nickName}:string):FC {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>
            <div>{nickName}</div>
        </div>
    )
}

export default User