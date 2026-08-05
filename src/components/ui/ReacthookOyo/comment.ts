// 4.1優先順位の低いState更新を区別する(useTransition)
export type Comment = {
    id: number;
    isbn: string;
    rank: number;
    body: string;
}