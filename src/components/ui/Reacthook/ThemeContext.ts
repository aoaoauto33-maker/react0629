import { createContext } from "react";

export type ThemeContextConfig = {
    mode: string,
    toggleMode: () => void,
}

const ThemeContext = createContext<ThemeContextConfig | undefined>({
    mode: 'light',
    toggleMode: () => {}
});

export default ThemeContext;