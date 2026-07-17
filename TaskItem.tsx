import React from 'react';
import { type Task } from './types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const isOverdue = !task.done && task.dueDate < todayStr;

  const formatMMDD = (dateStr: string) => {
    const parts = dateStr.split('-');
    return parts.length === 3 ? `${parts[1]}/${parts[2]}` : dateStr;
  };

  const handleCancelClick = () => {
    if (window.confirm(`「${task.title}」を削除してもよろしいですか？`)) {
      onDelete(task.id);
    }
  };

  return (
    <li>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={task.done} 
            onChange={() => onToggle(task.id)} 
          />
          <span>{task.title}</span>
        </label>
        
        <span>
          優先度:{task.priority} | 
          期限: {formatMMDD(task.dueDate)} 
          {isOverdue && " (期限切れ)"}
        </span>

        <button type="button" onClick={handleCancelClick}>
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