import { type Task } from '../types';
// typesファイルから型エイリアスであるTaskを持ってきている
import  Panel  from './Panel';
// Panelファイルから関数Panelを持ってきている
// Panelはタイトルと子コンポーネントの表示を管理するコンポーネント
import  TaskItem from './TaskItem';
// 1件のタスクを表示するためのコンポーネント

export default function TaskList({ 
  tasks,
  onToggle,
  onDelete,
}: {
  tasks: Task[];
  // タスクを配列で管理している
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Panel title="タスク一覧">
      {tasks.length === 0 ? (
        <p>該当するタスクはありません。</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </Panel>
  );
}