import styles from './User.module.css'

function User({nickName}) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>
            <div>{nickName}</div>
        </div>
    )
}

export default User