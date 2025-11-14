import {useEffect, useState, useCallback, useMemo} from "react";

function CommentsList({postId}) {
    const [comments, setComments] = useState([])
    const fetchComments = useCallback(postId => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.log(err))
    },[postId])

    useEffect(() => {
        fetchComments(postId)
    }, [fetchComments])

    const commentsMemo = useMemo(() => comments, [comments])

    return (
        commentsMemo.length ? commentsMemo.map((comment => <div>{comment.name}</div>)) : <div>Loading...</div>
    )
}

export default CommentsList