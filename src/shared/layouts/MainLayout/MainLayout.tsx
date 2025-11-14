import styles from './MainLayout.module.css'
import PostList from "../../../widgets/PostList/PostList";
import withLoading from "../../lib/hoc/withLoading";
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import {useState} from "react";

function MainLayout() {
    const [length, setLength] = useState(0)
    const PostListWithLoading = withLoading(PostList)

    return (
        <main className={styles.main}>
            <PostLengthFilter setLength={setLength}/>
            <PostListWithLoading length={length}/>
        </main>
    )
}

export default MainLayout