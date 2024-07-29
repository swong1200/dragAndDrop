// import React from "react";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// export default function Row({ id, title, image, place }) {
//     const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform)
//     };

//     return (
//       <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-white rounded shadow-md w-full p-20 flex items-center justify-start gap-20 touch-none">
//         <div className="h-96 w-96">
//             <img src={image} className="rounded-xl " />
//         </div>
//         <div className="">
//             <p>{title}</p>
//             <p>{place}</p>
//         </div>
        
//       </div>
//     );
//   }

import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Row({ id, title, image, place }) {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id});

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        height: isDragging ? "20px" : "400px",
    };

    const ghostStyle = {
        opacity: 0.5
    }

    return (
        <div>
            <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="cursor-move bg-white w-568 flex justify-items-start gap-24 touch-none z-0">
                <div className="h-96 w-96">
                    <img src={image} className="rounded-xl h-auto max-w-full" />
                </div>
                <div>
                    <p>{title}</p>
                    <p>{place}</p>
                </div>
            </div>
            {isDragging && <div style={ghostStyle} className="cursor-move bg-white w-568 flex justify-items-start gap-24 touch-none">
                <div >
                    <img src={image} />
                </div>
                <div>
                    <p>{title}</p>
                    <p>{place}</p>
                </div></div>}
        </div>
      
    );
  }