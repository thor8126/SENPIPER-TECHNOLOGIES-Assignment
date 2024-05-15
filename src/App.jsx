// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import SubmissionHistory from "./components/SubmissionHistory";
import Navbar from "./components/Helpers/Navbar";

function App() {
  return (
    <Router>
      <div className="container mx-auto py-8 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/history" element={<SubmissionHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
