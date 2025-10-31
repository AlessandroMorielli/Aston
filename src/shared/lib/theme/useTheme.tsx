import {useEffect} from "react";

export function useTheme(theme) {
    useEffect(() => {
        const root = document.getElementById('root');
        root.setAttribute('data-theme', theme)
    }, [theme])
}