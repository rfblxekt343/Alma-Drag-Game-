    // Word.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const Word = ({ word }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'WORD',
    item: { word },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="Word" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {word}
    </div>
  );
};

export default Word;
