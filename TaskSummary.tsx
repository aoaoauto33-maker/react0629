import React from 'react';
import { type Task } from './types';
import { Panel } from './Panel';

interface TaskSummaryProps {
  tasks: Task[];
}

export function TaskSummary({ tasks }: TaskSummaryProps) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.done).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const overdue = tasks.filter(t => !t.done && t.dueDate < todayStr).length;

  return (
    <Panel title="[集計]">
      <p>
        タスク: {total}件 / 
        完了: {completed}件 ({percent}%) / 
        期限切れ: {overdue}件
      </p>
    </Panel>
  );
}