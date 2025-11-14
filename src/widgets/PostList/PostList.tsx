import PostCard from "../../entities/post/ui/PostCard/PostCard";

function PostList({posts}) {

    return (
        <>
            {posts.map(item => <PostCard key={item.id} postId={item.id} post={item.title} />)}
        </>
    )
}

export default PostList