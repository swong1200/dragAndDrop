"use client";

import React, {useState} from 'react';
import {DndContext, closestCorners} from '@dnd-kit/core';
import Column from './components/Column'


export default function Home() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Scotland Island", location: "Sydney, Australia", image: ""},
        { id: 2, title: "The Charles Grand Brasserie & Bar", location: "Lorem ipsum, Dolor", image: ""},
        { id: 3, title: "Bridge Climb", location: "Dolor, Sit amet", image: ""},
        { id: 4, title: "Scotland Island", location: "Sydney, Australia", image: ""},
        { id: 5, title: "Clam Bar", location: "Etcetera, Vidi vici", image: ""},
        { id: 6, title: "Vivid Festival", location: "Sydney, Australia", image: ""},
    ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <DndContext collisionDetection={closestCorners}>
        <Column tasks={tasks}/>
       </DndContext>
    </main>
  );
}
