import React, { useState } from "react";
import { Link } from "react-router-dom";
import quizzes from "../data/quizzes";

function CreateQuizForm() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleAddQuestion = () => {
    if (!questionText || !options.every((opt) => opt) || !answer) {
      alert("Please fill out all fields for the question.");
      return;
    }

    setQuestions([
      ...questions,
      { id: questions.length + 1, text: questionText, options, answer },
    ]);

    // Reset question fields
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setAnswer("");
  };

  const handleSaveQuiz = () => {
    if (!title || questions.length === 0) {
      alert("Please provide a title and at least one question.");
      return;
    }

    quizzes.push({
      id: quizzes.length + 1,
      title,
      questions,
    });

    alert("Quiz created successfully!");
    setTitle("");
    setQuestions([]);
  };

  return (
    <div className="container">
      <h1>Create a New Quiz</h1>
      <Link to="/admin">
        <button>Back to Admin Panel</button>
      </Link>

      <div>
        <h2>Quiz Title</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter quiz title"
        />
      </div>

      <div>
        <h2>Add a Question</h2>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter question text"
        />
        <div>
          {options.map((opt, index) => (
            <div key={index}>
              <input
                type="text"
                value={opt}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
                placeholder={`Option ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the correct answer"
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div>
        <h2>Questions Preview</h2>
        <ul>
          {questions.map((q) => (
            <li key={q.id}>
              <strong>Q: {q.text}</strong>
              <ul>
                {q.options.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
              <p>Answer: {q.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSaveQuiz}>Save Quiz</button>
    </div>
  );
}

export default CreateQuizForm;
