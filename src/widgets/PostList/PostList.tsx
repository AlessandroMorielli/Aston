import PostCard from "../../entities/post/ui/PostCard/PostCard";
import {useState} from "react";
import {NavLink} from 'react-router-dom'
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import {usePosts} from "../../features/PostList/model/hooks/usePosts";
import filterByLength from "../../features/PostLengthFilter/lib/filterByLength";

function PostList() {
    const [length, setLength] = useState(0)

    const posts = usePosts();
    const filteredPosts = filterByLength(posts, length)
    return (
        <>
            <PostLengthFilter setLength={setLength}/>
            {filteredPosts.map(item => <NavLink to={`/posts/${item.id}`} state={filteredPosts[item.id-1]}>
                <PostCard key={item.id} postId={item.id} post={item.title} />
            </NavLink>)}
        </>
    )
}

export default PostList