import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quizApi from './QuizApi';
import { IoCaretBackCircle } from 'react-icons/io5';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const quiz = quizApi.find((quiz) => quiz.id === parseInt(id));

  const handleSubmit = () => {
    // Ye logic Check karti hai agar userAnswer empty nahi hai (trim extra spaces hata deta hai).
    if (userAnswer.trim().length > 0) {
      setFeedback('Answer submitted successfully!');
      setIsSubmitted(true);
    } else {
      setFeedback('Please write an answer before submitting.');
    }
  };

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#BEAFD2]">
        <p className="text-center text-black text-4xl font-bold">
          Quiz not found!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#BEAFD2] p-6 text-white">
      {/* Go back Button */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="mb-8 bg-gray-700 text-white px-6 py-3 rounded hover:opacity-90 transition-all"
        >
          <span className="flex items-center gap-2">
            <IoCaretBackCircle className="text-lg" />
            Go Back
          </span>
        </button>
      </div>

      {/* Quiz Card */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4">{quiz.question.title}</h1>
        <p className="text-lg mb-6">{quiz.question.description}</p>
        <div className="mb-4">
          <label htmlFor="answer" className="block font-medium mb-2">
            Your Answer:
          </label>
          <textarea
            id="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full h-32 px-4 py-2 rounded border font-mono text-blue-700 border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Write your answer here..."
            disabled={isSubmitted}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className={`w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition`}
        >
          Submit Answer
        </button>
        {feedback && (
          <div
            className={`mt-4 p-4 rounded ${
              feedback.includes('successfully')
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
