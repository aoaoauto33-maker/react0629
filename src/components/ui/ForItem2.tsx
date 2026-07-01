import Download from "./Download";
import type { Item } from "./ForList";

type ForItem2Props = {
    book: Item;
}

// bookはForListのitemかな?
export default function ForItem2({ book }: ForItem2Props){
    return (
        <>
        <dt>
            <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
            {book.title} ({book.price}円)
            </a>
        </dt>
        {book.summary}
        {book.download ? <Download isbn={book.isbn} /> :null}
        </>
    );
}