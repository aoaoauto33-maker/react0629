import type { ReactNode } from 'react';
import type { Item } from './ForList';

type ListTemplateProps = {
    src: Item[];
    children: (item: Item) => ReactNode;
    // reactNodeを返すアロー関数がchildrenの型になってる
}

export default function ListTemplate({ src, children }: ListTemplateProps){
    return(
        <dl>
            {src.map((elem) => (
                <div key={elem.isbn}>
                    {children(elem)}
                    {/* Appから受け取った関数を実行している */}
                </div>
            ))}
        </dl>
    );
}