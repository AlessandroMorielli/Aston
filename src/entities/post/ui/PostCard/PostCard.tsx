import styles from './PostCard.module.css'
import {useState} from "react";
import CommentsList from "../../../../widgets/CommentList/CommentsList";
import {useLocation} from 'react-router-dom'

function PostCard({postId, post}) {
    const location = useLocation()
    const [showComments, setShowComments] = useState<boolean>(false)

    function handleClick() {
        setShowComments((prev) => !prev)
    }

    return (
        <div className={styles.post} >
            <div className={styles.post__content}>{post || location?.state?.title}</div>
            <div className={styles.post__content}>{location?.state?.body ?? ''}</div>
            <div className={styles.post__comment} onClick={handleClick}>Comments</div>
            {showComments && <CommentsList postId={postId || location.state.id}/>}
        </div>
    )
}

export default PostCard