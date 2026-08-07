import { useReducer } from "react";

type Todo = {
    id: string;
    text: string;
    isDone: boolean;
};

type Action =
    | { type: "add"; newTodo: Todo }
    | { type: "delete"; id: string }
    | { type: "toggle"; id: string }
    | { type: "edit"; id: string; text: string };

export default function useTodo() {
    const [todos, dispatch] = useReducer((todos: Todo[], action: Action): Todo[] => {
        switch (action.type) {
            case "add":
                return [...todos, action.newTodo];

            case "delete":
                return todos.filter((todo) => todo.id !== action.id);

            case "toggle":
                return todos.map((todo) => 
                    todo.id === action.id 
                    ? { ...todo, isDone: !todo.isDone } 
                    : todo);

            case "edit":
                return todos.map((todo) => 
                    todo.id === action.id 
                    ? { ...todo, text: action.text } 
                    : todo);

            default:
                return todos;
        }
    }, []);

    const handleAdd = (newTodo: Todo) => dispatch({ type: "add", newTodo });
    const handleDelete = (id: string) => dispatch({ type: "delete", id });
    const handleToggle = (id: string) => dispatch({ type: "toggle", id });
    const handleEdit = (id: string, text: string) => dispatch({ type: "edit", id, text });

    return [todos, handleAdd, handleDelete, handleToggle, handleEdit] as const;
}