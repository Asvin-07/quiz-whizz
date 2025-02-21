import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-black dark:text-white text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome 😊 </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Test your knowledge and have fun!</p>

            {/* Start Quiz Button */}
            <Link to="/quiz">
                <button className="w-full p-3 mb-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    🚀 Start Quiz
                </button>
            </Link>

            {/* View Scoreboard Button */}
            <Link to="/scoreboard">
                <button className="w-full p-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold">
                    📊 View Scoreboard
                </button>
            </Link>
        </div>
    );
};

export default Home;
