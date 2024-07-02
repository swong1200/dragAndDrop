import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Row from './Row';

export default function Column({ tasks }) {
  return (
    <div className="bg-offwhite rounded p-15 w-4/5 max-w-lg flex flex-col gap-15">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Row id={task.id} title={task.title} key={task.id}/>
        ))}
      </SortableContext>
    </div>
  );
}
