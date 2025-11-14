import {createPortal} from "react-dom";

import styles from './Modal.module.css'

function Modal({onClick}) {
    return (
        createPortal(
            <div className={styles.modal} onClick={onClick}>
                <div className={styles.modal__content}>
                    <Modal.Header/>
                    <Modal.Content />
                    <Modal.Footer />
                </div>
            </div>,
            document.getElementById('root')
        )
    )
}


Modal.Header = () => {
    return (
        <div>О проекте</div>
    )
}

Modal.Content = () => {
    return (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti doloremque earum,
            ipsum, maxime modi odit quae quasi rem reprehenderit sit soluta ullam vitae. Dolores enim est
            labore quam sint?
        </div>
    )
}

Modal.Footer = () => {
    return (
        <div>
            All copyrights (C) 2025 Reserved
        </div>
    )
}

export default Modal