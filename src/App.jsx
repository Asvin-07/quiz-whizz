import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Scoreboard from "./pages/Scoreboard";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition duration-300">
        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-bold">Quiz Whizz 🎉</h1>
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
