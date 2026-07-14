import styles from './ModuleBasic.module.css';

export default function ModuleBasic() {
    return (
        <div className={styles.panel}>
            <b>React</b>は、フロントエンド開発のためのJavaScriptライブラリです
        </div>
    );
}