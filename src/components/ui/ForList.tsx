import ForItem from './ForItem.tsx';

export type Item = {
    isbn: string;
    title: string;
    price: number;
    summary: string;
    download: boolean;
};
  
type ForListProps = {
    src: Item[];
};
  
export default function ForList({ src }: ForListProps) {
    return (
        <dl>
            {src.map((elem) => (
                <ForItem item={elem} key={elem.isbn} />
            ))}
        </dl>
    );
}