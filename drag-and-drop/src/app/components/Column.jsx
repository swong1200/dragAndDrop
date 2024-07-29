import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Row from './Row';

export default function Column({ locations }) {
  return (
    <div className="rounded p-15 w-4/5 max-w-lg flex flex-col gap-15">
      <SortableContext items={locations} strategy={verticalListSortingStrategy}>
        {locations.map((location) => (
          <Row id={location.id} title={location.title} key={location.id} image={location.image} place={location.location} />
        ))}
      </SortableContext>
    </div>
  );
}
