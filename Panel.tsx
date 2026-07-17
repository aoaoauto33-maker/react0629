import React from 'react';

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

export function Panel({ title, children }: PanelProps) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}