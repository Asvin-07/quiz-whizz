import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizHistory } from "../db";

const Scoreboard = () => {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const history = await getQuizHistory();
            // Sort scores in descending order (highest first)
            const sortedHistory = history.sort((a, b) => b.score - a.score);
            setQuizHistory(sortedHistory);
        };

        fetchHistory();
    }, []);

    return (
        <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-black dark:text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🏆 Scoreboard</h2>

            {quizHistory.length === 0 ? (
                <p className="text-lg text-gray-500">No quiz attempts yet. Play a quiz to see your score here!</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="p-3 border">Rank</th>
                            <th className="p-3 border">Score</th>
                            <th className="p-3 border">Total</th>
                            <th className="p-3 border">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quizHistory.map((attempt, index) => (
                            <tr key={index} className="border">
                                <td className="p-3 border font-bold">
                                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                                </td>
                                <td className="p-3 border">{attempt.score}</td>
                                <td className="p-3 border">{attempt.totalQuestions}</td>
                                <td className="p-3 border text-sm text-gray-500">{attempt.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className="flex flex-col gap-3 mt-6">
                {/* Back to Home Button */}
                <Link to="/">
                    <button className="w-full p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                        🏠 Back to Home
                    </button>
                </Link>

                {/* Play Again Button */}
                <Link to="/quiz">
                    <button className="w-full p-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold">
                        🎮 Play Again
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Scoreboard;
