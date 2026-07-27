import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { todosAtom, todoLastIdAtom } from '../../../store/atom';
import './Reactkihon/StateTodo.css';

export default function JotaiTodo() {
    const [title, setTitle] = useState('');
    // TodoリストをJotaiから取得
    const [todo, setTodo] = useAtom(todosAtom);
    // 最大id値をJotaiから取得
    const maxId = useAtomValue(todoLastIdAtom);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    // [追加]ボタンでTodo項目を追加
    const handleTodoAdd = () => {
        setTodo([
            ...todo,
            {
                id: maxId + 1,
                title,
                isDone: false,
            }
        ]);
    }

    // [済]ボタンでTodo項目を作業済みとしてマーク
    const handleDone = (id: number) => {
        setTodo(todo.map(item => 
            item.id === id ? { ...item, isDone: !item.isDone } : item
        ));
    };

    // [削除]ボタンでTodo項目を削除
    const handleRemove = (id: number) => {
        setTodo(todo.filter(item =>
            item.id !== id
        ));
    };

    return (
        <div>
            <label>
                やること:
                <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleTodoAdd}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button" onClick={() => handleDone(item.id)}>済</button>
                        <button type="button" onClick={() => handleRemove(item.id)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}