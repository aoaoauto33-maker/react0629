// -1- MUIの基本 ボタンのデザインが違うよ
import { Button } from '@mui/material';

export default function MaterialBasic() {
    return (
        <>
            <Button variant="text" color="secondary" sx={{ textTransform: 'none' }}>Text</Button>
            {/* sx={{ textTransform: 'none' }}によって書いたまま表示してくれる */}
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            {/* MUIだと勝手に全部大文字にしてくれる */}
        </>
    );
}