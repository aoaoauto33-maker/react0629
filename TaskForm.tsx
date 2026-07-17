import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskSchema, type TaskFormData } from './types';
import { Panel } from './Panel';

interface TaskFormProps {
  onAdd: (data: TaskFormData) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const todayStr = new Date().toISOString().split('T')[0];

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: { 
      title: '', 
      assignee: '', 
      priority: '中', 
      dueDate: todayStr, 
      memo: '' 
    }
  });

  const onSubmit = (data: TaskFormData) => {
    onAdd(data);
    reset({
      title: '',
      assignee: '',
      priority: '中',
      dueDate: todayStr,
      memo: ''
    });
  };

  return (
    <Panel title="タスクを追加">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('title')} placeholder="タスク名" />
          {errors.title && <div>{errors.title.message}</div>}
        </div>

        <div>
          <input {...register('assignee')} placeholder="担当者" />
          {errors.assignee && <div>{errors.assignee.message}</div>}
        </div>

        <div>
          <span>優先度:</span>
          <label><input type="radio" value="高" {...register('priority')} /> 高</label>
          <label><input type="radio" value="中" {...register('priority')} /> 中</label>
          <label><input type="radio" value="低" {...register('priority')} /> 低</label>
        </div>

        <div>
          <label>
            期限:
            <input type="date" {...register('dueDate')} />
          </label>
        </div>

        <div>
          <input {...register('memo')} placeholder="メモ (任意)" />
        </div>

        <div>
          <button type="submit">追加</button>
        </div>
      </form>
    </Panel>
  );
}