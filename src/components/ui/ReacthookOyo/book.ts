// 4.1優先順位の低いState更新を区別する(useTransition)
export type Book = {
    isbn: string;
    title: string;
    price: number;
    summary: string;
    download: boolean;
};