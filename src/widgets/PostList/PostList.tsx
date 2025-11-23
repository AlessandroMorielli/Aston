import PostCard from "../../entities/post/ui/PostCard/PostCard";
import {useMemo, useState} from "react";
import {NavLink} from 'react-router-dom'
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import {usePosts} from "../../features/PostList/model/hooks/usePosts";
import filterByLength from "../../features/PostLengthFilter/lib/filterByLength";
import {useGetPostsQuery} from '../../entities/post/api/postsApi'
import {FC} from 'react'

function PostList():FC {
    const [length, setLength] = useState(0)

    const {data: posts, isLoading, error} = useGetPostsQuery();

    // const filteredPosts = filterByLength(posts, length)
    return (
        <>
            <PostLengthFilter setLength={setLength}/>
            {isLoading ? <div>Loading...</div> :
                error && <div>Loading error</div> ||
                posts.map(item => <NavLink to={`/posts/${item.id}`} state={posts[item.id - 1]} key={item.id}>
                    <PostCard key={item.id} postId={item.id} post={item.title}/>
                </NavLink>)}
        </>
    )
}

export default PostList