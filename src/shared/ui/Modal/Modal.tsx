import {createPortal} from "react-dom";

import styles from './Modal.module.css'

function Modal({onClick}) {
    return (
        createPortal(
            <div className={styles.modal} onClick={onClick}>
                <div className={styles.modal__content}>
                    <div>О проекте</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti doloremque earum,
                        ipsum, maxime modi odit quae quasi rem reprehenderit sit soluta ullam vitae. Dolores enim est
                        labore quam sint?
                    </div>
                </div>
            </div>,
            document.getElementById('root')
        )
    )
}

export default Modal