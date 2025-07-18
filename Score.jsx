import React from 'react';

const Score = ({ score, total, onRestart }) => (
  <div className="score">
    <h2>Quiz Completed!</h2>
    <p>Your Score: {score} / {total}</p>
    <button onClick={onRestart}>Restart</button>
  </div>
);

export default Score;
