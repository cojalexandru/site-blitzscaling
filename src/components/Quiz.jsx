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
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };
  const handleOptionClick = (answer) => {
    if (isTrueFalse) {
      addAnswer(answer);
      if (answer === quizData[currentQuestion].answer) {
        setScore(score + 1);
      }

      if (currentQuestion === quizData.length - 1) {
        setCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      addAnswer(answer);
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
  const isAnswer = (index, option) => {
    return answers[index] === option;
  };

  const isCorrectAnswer = (index, option) => {
    if (isTrueFalse) return quizData[index].answer === option;
    else return quizData2[index].answer === option;
  };

  return (
    <div>
      {isTrueFalse ? (
        completed ? (
          <div className="quiz-completed">
            <h2>
              Chestionar terminat | Scor: {score}/{quizData.length}
            </h2>
            {quizData.map((data, index) => (
              <div className="question" key={index}>
                <h2>{data.question}</h2>
                {data.options.map((option, optionIndex) =>
                  isAnswer(index, option) ? (
                    isCorrectAnswer(index, option) ? (
                      <button
                        className="question-answer right"
                        key={optionIndex}
                      >
                        {option}
                      </button>
                    ) : (
                      <button
                        className="question-answer wrong"
                        key={optionIndex}
                      >
                        {option}
                      </button>
                    )
                  ) : (
                    <button className="question-answer" key={optionIndex}>
                      {option}
                    </button>
                  )
                )}

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
          <div className="quiz">
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
          </div>
        )
      ) : completed ? (
        <div className="quiz-completed">
          <h2>
            Chestionar terminat | Scor: {score}/{quizData2.length}
          </h2>
          {quizData2.map((data, index) => (
            <div className="question" key={index}>
              <h2>{data.question}</h2>
              {data.options.map((option, optionIndex) =>
                isAnswer(index, option) ? (
                  isCorrectAnswer(index, option) ? (
                    <button className="question-answer right" key={optionIndex}>
                      {option}
                    </button>
                  ) : (
                    <button className="question-answer wrong" key={optionIndex}>
                      {option}
                    </button>
                  )
                ) : (
                  <button className="question-answer" key={optionIndex}>
                    {option}
                  </button>
                )
              )}
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
        <div className="quiz">
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
        </div>
      )}
    </div>
  );
}

export default Quiz;
