import styles from './MainLayout.module.css'
import PostList from "../../../widgets/PostList/PostList";

function MainLayout() {

    return (
        <main className={styles.main}>
            <PostList />
        </main>
    )
}

export default MainLayout