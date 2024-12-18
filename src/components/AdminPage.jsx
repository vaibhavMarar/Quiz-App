import React from "react";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      
      <div>
        <Link to="/create">
          <button>Create New Quiz</button>
        </Link>
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default AdminPage;
