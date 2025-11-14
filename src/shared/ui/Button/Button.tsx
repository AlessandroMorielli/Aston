import light_logo from '../../../../public/eclipse.png'
import dark_logo from '../../../../public/moon.png'
import styles from './Button.module.css'

import {useContext} from "react";
import {ThemeContext} from "../../lib/theme/ThemeProvider/ThemeProvider";

function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const images = {
        light: dark_logo,
        dark: light_logo
    }

    return (
        <button className={styles.theme__button} onClick={toggleTheme}>
            <img src={images[theme]} alt=""/>
        </button>
    )
}

export default Button