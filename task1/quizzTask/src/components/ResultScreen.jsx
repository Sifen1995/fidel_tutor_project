import React, { useState } from 'react';
import FeedbackCard from './explanationCard';

const ResultScreen = ({ score, total, quizData, userAnswers, onRestart }) => {
  const [showReview, setShowReview] = useState(false);
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col p-6 font-sans">
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-900">Quiz Results</h1>
        <p className="text-gray-500 mt-2">You scored {score} out of {total}</p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center my-8">
        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-blue-600">
          <span className="text-2xl font-black text-blue-600">{percentage}%</span>
        </div>
      </div>

      {!showReview ? (
        <div className="space-y-4">
          <button 
            onClick={() => setShowReview(true)}
            className="w-full py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200"
          >
            Review All Answers
          </button>
          <button 
            onClick={onRestart}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-8 mt-4">
          <h2 className="text-xl font-bold border-b pb-2">Detailed Review</h2>
          {quizData.map((item, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === item.correctAnswer;

            return (
              <div key={index} className="border-b pb-6">
                <p className="font-bold text-gray-800 mb-3">
                  {index + 1}. {item.question}
                </p>
                <div className="space-y-2">
                   <p className={`text-sm p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                     <strong>Your Answer:</strong> {userAnswer || "Skipped"}
                   </p>
                   {!isCorrect && (
                     <p className="text-sm p-3 rounded-lg border bg-gray-50 border-gray-200 text-gray-800">
                       <strong>Correct Answer:</strong> {item.correctAnswer}
                     </p>
                   )}
                </div>
                <FeedbackCard 
                  isCorrect={isCorrect} 
                  explanation={item.explanation} 
                  titleOverride="Explanation:"
                />
              </div>
            );
          })}
          <button 
            onClick={onRestart}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultScreen;