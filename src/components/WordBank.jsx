// WordBank.jsx
import React from 'react';
import Word from './Word';

const words = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

const WordBank = () => {
  return (
    <div className="WordBank">
      <h2>Word Bank</h2>
      <div>
        {words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </div>
    </div>
  );
};

export default WordBank;
