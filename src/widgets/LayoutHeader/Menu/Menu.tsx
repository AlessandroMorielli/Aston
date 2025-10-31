import {useState} from 'react'
import styles from "./Menu.module.css";
import Modal from "../../../shared/ui/Modal/Modal";

function Menu() {
    const menu: string[] = ['Categories', 'Pages', 'Contact Us', 'About Us'];
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(!showModal)
    }

    return (
        <>
            <nav className={styles.menu}>
                <ul>
                    {menu.map((item, index) => {
                            switch (item) {
                                case 'About Us':
                                    return <li key={index} onClick={handleClick}>{item}</li>
                                default:
                                    return <li key={index}>{item}</li>
                            }

                        }
                    )}
                </ul>
            </nav>
            {showModal && <Modal onClick={handleClick}/>}
        </>
    )
}

export default Menu