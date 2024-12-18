import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizzes from "../data/quizzes";

function QuizPage() {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    setScore(correct);
  };

  return (
    <div className="container">
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={opt}
                onChange={() => setAnswers({ ...answers, [q.id]: opt })}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <h2>Your Score: {score}/{quiz.questions.length}</h2>}
    </div>
  );
}

export default QuizPage;
