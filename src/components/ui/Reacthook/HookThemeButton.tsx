import { Button } from "@mui/material";
import { use } from "react";
import ThemeContext from "./ThemeContext";

export default function HookThemeButton() {
    const themeContext = use(ThemeContext);
    if (!themeContext) {
        return <div>No context provided</div>
    }

    const { mode, toggleMode } = themeContext;
    return (
        <Button variant="contained" onClick={toggleMode}>
            Mode {mode}
        </Button>
    );
}