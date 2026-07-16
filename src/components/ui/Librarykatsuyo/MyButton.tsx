// ストーリーの確認
import '../../../stories/button.css';

/**
 * Propsの型定義
 * HTMLButtonElementの標準属性（onClick, disabled等）も継承します
 * HTMLのボタン属性を全部使えるようにする
 */
interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** ボタンの強調表示フラグ */
    primary?: boolean;
    /** 背景色のカスタム指定 */
    backgroundColor?: string | null;
    /** サイズ展開 */
    size?: 'small' | 'medium' | 'large';
    /** ボタンのラベル（必須） */
    label: string;
}

export default function MyButton({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    ...props
    // 4つのキーにオプションがあった
}: MyButtonProps) {
    // primary属性に応じてスタイルクラスを決定
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            // joinで" "(一マス)空けて横に並べる
            style={backgroundColor ? { backgroundColor } : undefined}
            {...props}
        >
            {label}
        </button>
    );
}