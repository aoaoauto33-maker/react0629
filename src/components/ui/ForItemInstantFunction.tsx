// -6- 即時関数 ForItemの代わりなので、これを使うときはForItemは使わない
import type { Item } from "./ForList";
import Download from "./Download";

type ForItemProps = {
    item: Item;
};

export default function ForItemInstantFunction({ item }: ForItemProps){
    return(
        <>
        <dt>
            <a href="">
                {item.title} ({item.price}円)
            </a>
        </dt>
        {(() => {
            if(item.download){
                return <dd>{item.summary}<Download  isbn={item.isbn} /></dd>
                // Downloadにisbnというpropsを渡している
            }else{
                return <dd>{item.summary}</dd>
            }
        })()}
        {/* 関数のすぐ後ろに()をつけることで、すぐに実行してくれる */}
        {/* 実行されたデータがすぐ欲しいので、即時関数にしておく */}
        </>
    );
}