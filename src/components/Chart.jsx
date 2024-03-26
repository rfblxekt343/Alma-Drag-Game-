// Chart.jsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Chart = () => {
  const [droppedWords, setDroppedWords] = useState([]);

  const handleDrop = (item) => {
    setDroppedWords([...droppedWords, item.word]);
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'WORD',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="Chart" ref={drop}>
      <h2>Chart</h2>
      <div className={isOver ? 'Chart-dropzone-active' : 'Chart-dropzone'}>
        {droppedWords.map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
