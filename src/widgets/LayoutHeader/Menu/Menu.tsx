import styles from "./Menu.module.css";

function Menu() {
    const menu: string[] = ['Categories', 'Pages', 'Contact Us', 'About Us'];

    return (
        <nav className={styles.menu}>
            <ul>
                {menu.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </nav>
    )
}

export default Menu