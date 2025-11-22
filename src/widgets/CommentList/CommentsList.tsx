import {useGetCommentsQuery} from "../../entities/comments/api/commentsApi";

function CommentsList({postId}) {
    const {data: comments, isLoading, error} = useGetCommentsQuery(postId);

    return (
        isLoading ? <div>Loading...</div> :
            error ? <div>Loading error</div> : comments.map((comment => <div>{comment.name}</div>))
    )
}

export default CommentsList