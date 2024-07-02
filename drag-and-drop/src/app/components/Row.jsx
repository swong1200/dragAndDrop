import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Row({ id, title }) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };

    return (
      <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-white rounded shadow-md w-full p-20 flex items-center justify-start gap-20 touch-none">
        {title}
      </div>
    );
  }