import React from 'react';

const DifficultySelector = ({ onSelect }) => (
  <div className="difficulty-selector">
    <h2>Select Difficulty</h2>
    <button onClick={() => onSelect('easy')}>Easy</button>
    <button onClick={() => onSelect('medium')}>Medium</button>
    <button onClick={() => onSelect('hard')}>Hard</button>
  </div>
);

export default DifficultySelector;
