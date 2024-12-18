import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import AdminPage from "./components/AdminPage";
import CreateQuizForm from "./components/CreateQuizForm";

// Add this route inside <Routes>:



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create" element={<CreateQuizForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

