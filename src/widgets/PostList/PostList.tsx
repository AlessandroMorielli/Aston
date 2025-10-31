import PostCard from "../../entities/post/ui/PostCard/PostCard";

function PostList() {
    const posts:string[] = ['A', 'B', 'C', 'D', 'E']

    return (
        <>
            {posts.map(item => <PostCard key={item} post={item} />)}
        </>
    )
}

export default PostList