import React from 'react';

const QuestionCard = ({
  questionData,
  handleAnswer,
  questionNumber,
  totalQuestions,
  timeLeft,
  selectedOption,
}) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-number">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="timer">
          Time Left: {formattedTime}
        </div>
      </div>

      <h3>{questionData.question}</h3>

      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
