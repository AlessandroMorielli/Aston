import {useGetCommentsQuery} from "../../entities/comments/api/commentsApi";
import type {Comments} from "../../entities/comments/model/types";
import {FC} from 'react'

function CommentsList({postId}:Comments):FC {
    const {data: comments, isLoading, error} = useGetCommentsQuery(postId);

    return (
        isLoading ? <div>Loading...</div> :
            error ? <div>Loading error</div> : comments.map((comment => <div>{comment.name}</div>))
    )
}

export default CommentsList