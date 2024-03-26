// App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WordBank from './components/WordBank';
import Chart from './components/Chart';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <WordBank />
        <Chart />
      </div>
    </DndProvider>
  );
}

export default App;
