import React from 'react';
import { type PriorityFilter, type SortOrder } from './types';
import { Panel } from './Panel';

interface TaskFilterProps {
  priorityFilter: PriorityFilter;
  hideDone: boolean;
  sortOrder: SortOrder;
  onChangePriority: (p: PriorityFilter) => void;
  onChangeHideDone: (h: boolean) => void;
  onChangeSort: (s: SortOrder) => void;
}

export function TaskFilter({
  priorityFilter, hideDone, sortOrder, onChangePriority, onChangeHideDone, onChangeSort
}: TaskFilterProps) {
  const priorities: PriorityFilter[] = ['すべて', '高', '中', '低'];

  return (
    <Panel title="コントロール">
      <div>
        <label>
          絞り込み: 
          <select 
            value={priorityFilter} 
            onChange={e => onChangePriority(e.target.value as PriorityFilter)}
          >
            {priorities.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox" 
            checked={hideDone} 
            onChange={e => onChangeHideDone(e.target.checked)} 
          />
          完了タスクを隠す
        </label>
      </div>

      <div>
        <span>並び替え: </span>
        <button 
          type="button" 
          onClick={() => onChangeSort(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          期限順 {sortOrder === 'asc' ? '▲' : '▼'}
        </button>
      </div>
    </Panel>
  );
}