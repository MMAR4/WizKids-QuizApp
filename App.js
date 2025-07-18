import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SubjectSelector from './components/SubjectSelector';
import DifficultySelector from './components/DifficultySelector';
import QuestionCard from './components/QuestionCard';
import Score from './components/Score';
import Timer from './components/Timer';
import questionsData from './data/questions';
import './App.css';

function App() {
  const [stage, setStage] = useState('login'); // login, signup, subject, difficulty, quiz, score
  const [subject, setSubject] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSelectAnswer = (selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: selectedOption,
    }));
  };

  const goToNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const goToPrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleEndQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);
    setStage('score');
  };

  const handleLogin = () => setStage('subject');
  const handleSignup = () => setStage('login');

  const selectSubject = (subj) => {
    setSubject(subj);
    setStage('difficulty');
  };

  const selectDifficulty = (level) => {
    setDifficulty(level);
    const selectedQuestions = questionsData[subject][level];
    setQuestions(selectedQuestions);
    setCurrent(0);
    setAnswers({});
    setScore(0);
    setStage('quiz');
  };

  const restart = () => {
    setStage('subject');
    setSubject(null);
    setDifficulty(null);
    setQuestions([]);
    setScore(0);
    setCurrent(0);
    setTimeLeft(0);
    setAnswers({});
  };

  return (
    <div className="App">
      {stage === 'login' && <Login onLogin={handleLogin} onSwitch={() => setStage('signup')} />}
      {stage === 'signup' && <SignUp onSignup={handleSignup} onSwitch={() => setStage('login')} />}
      {stage === 'subject' && <SubjectSelector onSelect={selectSubject} />}
      {stage === 'difficulty' && <DifficultySelector onSelect={selectDifficulty} />}
      {stage === 'quiz' && (
        <>
          <Timer
            difficulty={difficulty}
            stage={stage}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={handleEndQuiz}
          />
          <QuestionCard
            questionData={questions[current]}
            handleAnswer={handleSelectAnswer}
            questionNumber={current + 1}
            totalQuestions={questions.length}
            timeLeft={timeLeft}
            selectedOption={answers[current] || null}
          />
          <div className="navigation-buttons" style={{ marginTop: '15px' }}>
            <button onClick={goToPrevious} disabled={current === 0}>
              Previous
            </button>
            {current < questions.length - 1 ? (
              <button onClick={goToNext}>Next</button>
            ) : (
              <button onClick={handleEndQuiz}>Finish Quiz</button>
            )}
          </div>
        </>
      )}
      {stage === 'score' && (
        <Score score={score} total={questions.length} onRestart={restart} />
      )}
    </div>
  );
}

export default App;