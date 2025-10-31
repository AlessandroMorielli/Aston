import styles from './Header.module.css'
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import User from "./User/User";

function Header() {
    const user: string = 'Guest';

    return (
        <header className={styles.header}>
            <div className={styles.header__left__part}>
                <Logo/>
                <Menu/>
            </div>
            <div className={styles.header__right__part}>
                <Search/>
                <User nickName={user}/>
            </div>
        </header>
    )
}

export default Header