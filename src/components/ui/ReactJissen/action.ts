// // 1.useActionState関数によるデータ更新
// export type UpdateFormProps = {
//     id: string;
//     title: string;
//     price: number;
//     published: string;
// }

// type UpdateFormState = {
//     result: UpdateFormProps | null;
//     errors: string[] | null;
// };

// // バリデーション担当
// export function updateForm({id, title, price, published,}: UpdateFormProps): Promise<UpdateFormState>{
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const errors = [];
//             if(title === ""){ errors.push("タイトルは必須です");}
//             if(price < 0){errors.push("価格は0以上でなければなりません");}
//             if(published === ""){errors.push("刊行日は必須です");}
//             if(errors.length > 0){
//                 // 条件満たしてなかったらエラーを返すよ(失敗)
//                 resolve({
//                     result: null,
//                     errors
//                     // 上のifに引っかかったerrorsをここで一気にresolveとして返す
//                 });
//             }else{
//                 // ちゃんと書けてたら書いた値を返すよ(成功)
//                 resolve({
//                     result: {id, title, price, published},
//                     errors: null
//                 });
//             }
//         },1000);
//     });
// }
// // 今回全てresolveにしてるのは、通信エラーとかガチ失敗のみをrejectに入れたかったから




// 2. 楽観的更新を実装する(useOptimistic)
export type UpdateFormProps = {
    id: string;
    title: string;
    price: number;
    published: string;
    updating: boolean;
}

// 戻り値（State）の型定義
type UpdateFormState = {
    result: UpdateFormProps | null;
    errors: string[] | null;
};

// 非同期なフォーム更新
export function updateForm({id, title, price, published}: UpdateFormProps): Promise<UpdateFormState> {
    return new Promise(resolve => {
        // 遅延をシミュレート(1000msの休止)
        setTimeout(() => {
            // 入力値を検証(エラー時はメッセージを蓄積)
            const errors = [];
            if (title === '') { errors.push('タイトルは必須です。'); }
            if (price < 0) { errors.push('価格は0以上でなければなりません。'); }
            if (published === '') { errors.push('刊行日は必須です。'); }
            // エラーが存在する場合はエラーメッセージを送信
            if (errors.length > 0) {
                // エラーがある場合
                resolve({ 
                    result: null,
                    errors
                });
            } else {
                resolve({
                    result: {id, title, price, published, updating: false},
                    // 4つしか受け取っていなかったが、ここで初めてupdatingを追加している
                    errors: null
                });
            }
        }, 10000);
    });
}