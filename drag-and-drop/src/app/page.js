"use client";

import React, {useState} from 'react';
import {DndContext, closestCorners} from '@dnd-kit/core';
import Column from './components/Column'
import { arrayMove } from '@dnd-kit/sortable';


export default function Home() {
    const [locations, setLocations] = useState([
        { id: 1, title: "Scotland Island", location: "Sydney, Australia", image: ""},
        { id: 2, title: "The Charles Grand Brasserie & Bar", location: "Lorem ipsum, Dolor", image: ""},
        { id: 3, title: "Bridge Climb", location: "Dolor, Sit amet", image: ""},
        { id: 4, title: "Scotland Island", location: "Sydney, Australia", image: ""},
        { id: 5, title: "Clam Bar", location: "Etcetera, Vidi vici", image: ""},
        { id: 6, title: "Vivid Festival", location: "Sydney, Australia", image: ""},
    ]);

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
