import { type Task } from '../types';

export default function TaskItem({ 
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  // 取得した日付を文字列に変えて、欲しい情報だけ取り出す変数
  const todayStr = new Date().toISOString().split('T')[0];
  // new Date()=今の日時を取得
  // toISOString()=日時を文字列に変換 => 2026-07-17T13:45:20.000Z
  // split('T')=Tで区切る　=> ["2026-07-17","04:45:20.000Z"]
  // [0]で配列の最初だけ取り出す => "2026-07-17"だけ残る

  // 期限切れタスクか判定する変数
  const isOverdue = !task.done && task.dueDate < todayStr;
  // isOverdue=タスクが終わっていない(doneがfalse)かつdueDateが現在日時を過ぎているタスク


  return (
    <li>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={task.done} 
            onChange={() => onToggle(task.id)} 
          />
          {/* 完了しているタスクは標準的なsタグ（打ち消し線）のみで表現 */}
          {task.done ? <s>{task.title}</s> : <span>{task.title}</span>}
        </label>
        
        <span>
          {'  '}優先度:{task.priority} | 期限: {task.dueDate}{'  '}
        </span>

        {isOverdue && <span style={{color:'red'}}>期限切れ</span>}

        <button type="button" onClick={() => {
          if(window.confirm(`「${task.title}」を削除してもよろしいですか？`)){
            onDelete(task.id);
          }
          // ブラウザがもつ機能、ダイアログが表示される、OKを押したときだけ削除処理を行う
        }}>
          削除
        </button>
      </div>
      
      {task.memo && (
        <div>
          担当: {task.assignee} | メモ: {task.memo}
        </div>
      )}
    </li>
  );
}