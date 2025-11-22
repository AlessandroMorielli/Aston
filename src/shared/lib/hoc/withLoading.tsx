import {useState, useEffect, useMemo} from 'react';
import filterByLength from "../../../features/PostLengthFilter/lib/filterByLength";

function withLoading(WrappedComponent) {
    const [posts, setPosts] = useState<string[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
    }, [posts])


    return function PostListWithLoading(props) {
        const postsMemo = useMemo(() => posts, [posts])
        const filteredPosts = filterByLength(postsMemo, props.length)
        return (
            <WrappedComponent posts={filteredPosts} {...props}/>
        )
    }
}

export default withLoading