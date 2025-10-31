import styles from './PostCard.module.css'

function PostCard({post}) {
    return (
        <a href='#'>
            <div className={styles.post}>{post}</div>
        </a>
    )
}

export default PostCard