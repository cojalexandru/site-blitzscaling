import React, { useState } from "react";
import QuizQuestions from "../assets/questions.json";
import { Link } from "react-router-dom";

const quizData = QuizQuestions.questions;
const quizData2 = QuizQuestions.questions2;

function Quiz(props) {
  const { type } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (answer) => {
    if (isTrueFalse) {
      if (answer === quizData[currentQuestion].answer) {
        setScore(score + 1);
      }

      if (currentQuestion === quizData.length - 1) {
        setCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      if (answer === quizData2[currentQuestion].answer) {
        setScore(score + 1);
      }

      if (currentQuestion === quizData2.length - 1) {
        setCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const isTrueFalse = type === "TrueFalse";

  return (
    <div className="quiz">
      {isTrueFalse ? (
        completed ? (
          <div className="quiz-completed">
            <h2>Chestionar terminat | Scor: {score}</h2>
            {quizData.map((data, index) => (
              <div className="question" key={index}>
                <h2>{data.question}</h2>
                <button className="question-answer">{data.answer}</button>
                <Link
                  target="_blank"
                  to={data.explanationLink}
                  className="question-explanation"
                >
                  {data.explanation}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="question">
            <h2>{quizData[currentQuestion].question}</h2>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                className="question-option"
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )
      ) : completed ? (
        <div className="quiz-completed">
          <h2>Chestionar terminat | Scor: {score}</h2>
          {quizData2.map((data, index) => (
            <div className="question" key={index}>
              <h2>{data.question}</h2>
              <button className="question-answer">{data.answer}</button>
              <Link
                target="_blank"
                to={data.explanationLink}
                className="question-explanation"
              >
                {data.explanation}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="question">
          <h2>{quizData2[currentQuestion].question}</h2>
          {quizData2[currentQuestion].options.map((option, index) => (
            <button
              className="question-option"
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
