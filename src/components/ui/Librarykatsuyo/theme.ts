// -1.5-自作テーマをアプリに適用
import { createTheme, type Theme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: green[500],
        }
    },
    spacing: 10,
    // 1 = 10pxに基準を変えてる spacing:で基準を変える
});

export default theme;