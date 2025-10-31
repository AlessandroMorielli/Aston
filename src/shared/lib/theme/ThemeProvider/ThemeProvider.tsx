import {createContext, useState} from 'react';
import {themeSwitcher} from "../../../../features/ThemeSwitcher/ThemeSwitcher";
import {useTheme} from "../useTheme";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>  (undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(() => themeSwitcher(theme))
    }

    useTheme(theme)

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
