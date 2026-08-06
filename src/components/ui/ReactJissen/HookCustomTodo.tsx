// import { useState } from "react";
// import useTodo from "./useTodo";

// export default function HookCustomTodo() {
//     const [todos, handleAdd, handleDelete, handleToggle] = useTodo();
//     const [text, setText] = useState("");

//     const addTodo = () => {
//         if (!text) return;
//         handleAdd({ id: crypto.randomUUID(), text, isDone: false });
//         setText("");
//         // 入力欄をリセット
//     };

//     return (
//         <>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//             <button onClick={addTodo}>追加</button>

//             <h3>Todoリスト一覧</h3>
//             {todos.map((todo) => (
//                 <div key={todo.id} style={{ display:"flex"}}>
//                     <p style={{ margin:0 }}>{todo.isDone ? <s>{todo.text}</s> : todo.text}</p>
//                     <button onClick={() => handleToggle(todo.id)}>{todo.isDone ? "未" : "済"}</button>
//                     <button onClick={() => handleDelete(todo.id)}>削除</button>
//                 </div>
//             ))}
//         </>
//     );
// }


import { useState } from "react";
import useTodo from "./useTodo";

export default function HookCustomTodo() {
    const [todos, handleAdd, handleDelete, handleToggle, handleEdit] = useTodo();
    const [text, setText] = useState("");
    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState("");

    const addTodo = () => {
        if (!text) return;
        handleAdd({ id: crypto.randomUUID(), text, isDone: false });
        setText("");
    };

    const startEdit = (id: string, text: string) => {
        setEditId(id);
        setEditText(text);
    };

    const saveEdit = () => {
        if (!editId || !editText) return;
        handleEdit(editId, editText);
        setEditId(null);
        setEditText("");
    };

    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>追加</button>

            <h3>Todoリスト一覧</h3>

            {todos.map((todo) => (
                <div key={todo.id} style={{ display:"flex"}}>
                    {editId === todo.id ? (
                        <>
                            <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                            <button onClick={saveEdit}>保存</button>
                        </>
                    ) : (
                        <>
                            <p style={{ margin:0 }}>{todo.isDone ? <s>{todo.text}</s> : todo.text}</p>
                            <button onClick={() => startEdit(todo.id, todo.text)}>編集</button>
                            <button onClick={() => handleToggle(todo.id)}>{todo.isDone ? "未" : "済"}</button>
                            <button onClick={() => handleDelete(todo.id)}>削除</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
}