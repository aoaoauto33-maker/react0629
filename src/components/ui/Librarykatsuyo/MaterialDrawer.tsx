// -1.2- ドロワーメニュー実装
import { Home, Mail, Info, AccountTree } from "@mui/icons-material";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import { useState } from "react";

const menu = [
    {title: 'ホーム', href: 'home.html', icon: Home},
    {title: '問い合わせ', href: 'contact.html', icon: Mail},
    {title: '会社概要', href: 'company.html', icon: Info},
    {title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree},
    // iconって多分画像のライブラリ？アイコンのライブラリ？
];

export default function MaterialDrawer(){
    const [show, setShow] = useState(false);
    const handleDraw = () => setShow(!show);

    return(
        <>
        <Button onClick={handleDraw}>ドロワー</Button>
        <Drawer anchor="left" open={show}>
            {/* 左から出てくる */}
            <Box sx={{height: '100Vh'}} onClick={handleDraw}>
                {/* sx={{height: '100Vh'}} onClickの判定 */}
                <List>
                    {menu.map(obj => {
                        const Icon=obj.icon;
                        return(
                            <ListItem key={obj.title}>
                                <ListItemButton href={obj.href}>
                                    <ListItemIcon><Icon /></ListItemIcon>
                                    <ListItemText primary={obj.title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
        </>
    );
}