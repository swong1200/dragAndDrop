"use client";

import React, {useState} from 'react';
import {DndContext, closestCorners} from '@dnd-kit/core';
import Column from './components/Column'
import { arrayMove } from '@dnd-kit/sortable';
import { data } from '@/data';


export default function Home() {
    const [locations, setLocations] = useState(data);

    const getLocationPos = id => locations.findIndex(location => location.id === id)

    const handleDragEnd = (event)=> {
        const {active, over} = event;

        if (active.id === over.id) return;

        setLocations(location => {
            const originalPos = getLocationPos(active.id);
            const newPos = getLocationPos(over.id);

            return arrayMove(locations, originalPos, newPos)
        })
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column locations={locations}/>
       </DndContext>
    </main>
  );
}
