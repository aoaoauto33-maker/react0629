// -4- リストの絞り込み
import type { Item } from './ForList.tsx';
import ForItem from './ForItem.tsx';

type ForFilterProps = {
    items: Item[];
    price: number;
};

export default function ForFilter({ items , price }: ForFilterProps) {
    const lowPrice = items.filter(item => item.price < price);
    // filter = 条件に合うものだけを取り出すメソッド
    return (
        <dl>
            {
                lowPrice.map((item) => (
                    <ForItem item={item} key={item.isbn} />
                ))
            }
        </dl>
    );
}