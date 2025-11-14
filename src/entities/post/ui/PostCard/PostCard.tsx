import styles from './PostCard.module.css'
import {useState} from "react";
import CommentsList from "../../../../widgets/CommentList/CommentsList";

function PostCard({postId, post}) {
    const [showComments, setShowComments] = useState<boolean>(false)

    function handleClick() {
        setShowComments((prev) => !prev)
    }

    return (
        <div className={styles.post} >
            <div className={styles.post__content}>{post}</div>
            <div className={styles.post__comment} onClick={handleClick}>Comments</div>
            {showComments && <CommentsList postId={postId}/>}
        </div>
    )
}

export default PostCard