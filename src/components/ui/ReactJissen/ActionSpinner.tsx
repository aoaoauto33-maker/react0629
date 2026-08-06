import { useFormStatus } from "react-dom";
import loading from '../../../assets/loading.gif';

export default function ActionSpinner(){
    const { pending } = useFormStatus();
    // useFormStatus()はオブジェクトを返す
    // useFormStatus()を呼び出す
    // 返ってきたオブジェクトのpendingプロパティだけを取り出す
    // useFormStatus()は「Reactが内部で管理しているフォームの状態」を返している
    // ActionSpinnerを<form>の中に入れることで勝手に紐付けしてくれる
    return(
        <>
        <p hidden={!pending}>
            <img src={loading} alt="loading..." />
        </p>
        </>
    );
}
// このローディング表示してくれるコンポーネントを作っておけば、他のコンポーネントから使いまわすことができる