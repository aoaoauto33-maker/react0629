import { useState, type ReactNode } from "react";
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";
import ThemeContext, { type ThemeContextConfig } from "./ThemeContext";

// Propsの型を定義
type MyThemeProviderProps = {
    children: ReactNode;
    // propsでchildrenを受け取るためのReactNode
};

export default function MyThemeProvider({children}: MyThemeProviderProps) {
    const [mode, setMode] = useState<"light" | "dark">('light');
    // コンテキストに引き渡す情報を準備
    const themeConfig: ThemeContextConfig = {
        mode,
        // Stateのmodeを入れてる(= 'light'が入ってる)
        toggleMode: () => {
            setMode(prev =>
                prev === 'light' ? 'dark' : 'light'
                // lightだったらdarkへ、lightじゃなかったらlightへ
            );
        }
    };
    // テーマ定義 このアプリケーションのテーマを決めます、自分ルールで色など決められる
    // 設定したいものをオブジェクトとして入れる
    const theme = createTheme({
        palette: {
            mode,
            // mode値に応じてテーマを切り替え
            ...(mode === 'light'
            // スプレッド演算子、展開によりオブジェクトを取っ払って中身を取り出す
                ? {
                    primary: amber,
                    // オブジェクトなしのこれがそのままmodeに入る
                    // paletteの直下にprimaryが入る
                    // palette:{ mode, primary:amber }になる
                }
                : {
                    primary: {
                        main: grey[500],
                        contrastText: '#fff'
                    },
                    background: {
                        default: grey[900],
                        paper: grey[900],
                    },
                }
            ),
        },
    });
    return (
        <ThemeContext value={themeConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                {/* children = <HookThemeButton /> */}
            </ThemeProvider>
        </ThemeContext>
        // React19では、このContextオブジェクト自体をJSXタグとして書けるようになった
    );
}