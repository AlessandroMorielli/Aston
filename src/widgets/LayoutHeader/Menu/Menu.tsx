import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from "./Menu.module.css";
import Modal from "../../../shared/ui/Modal/Modal";

function Menu() {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(!showModal)
    }

    return (
        <>
            <nav className={styles.menu}>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <li onClick={handleClick}>About us</li>
            </nav>
            {showModal && <Modal onClick={handleClick}/>}
        </>
    )
}

export default Menu