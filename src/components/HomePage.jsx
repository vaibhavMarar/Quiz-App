import React from "react";
import { Link } from "react-router-dom";
import quizzes from "../data/quizzes";

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Quiz App</h1>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            {quiz.title} - <Link to={`/quiz/${quiz.id}`}>Take Quiz</Link>
          </li>
        ))}
      </ul>
      <Link to="/admin">
        <button>Go to Admin Panel</button>
      </Link>
    </div>
  );
}

export default HomePage;
