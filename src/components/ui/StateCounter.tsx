type StateCounterProps = {
    step: number;
    onUpdate: (step: number) => void;
}

export default function StateCounter({ step, onUpdate }: StateCounterProps){
    const handleClick = () => onUpdate(step);
    // propsで受け取った関数onUpdateと、propsで受け取ったstpeを引数で受けとる
    // この時点では、親からもらったものしか実行してないので自分は何もしてない
    //　親から渡された処理を子がやる？
    return(
        <button onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}