import React, { useState } from 'react';
import ChoiceCard from './choice';
import FeedbackCard from './explanationCard';
import ResultScreen from './ResultScreen';
import quizData from '../quizData';

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // New state to remember every choice made
  const [userAnswers, setUserAnswers] = useState({});

  const currentData = quizData[currentIndex];
  const isLastQuestion = currentIndex === quizData.length - 1;

  const handleSubmit = () => {
    if (!selectedOption) return;

    // Save the answer to our history object
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: selectedOption
    }));

    if (selectedOption === currentData.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  if (isFinished) {
    return (
      <ResultScreen 
        score={score} 
        total={quizData.length} 
        quizData={quizData}
        userAnswers={userAnswers}
        onRestart={() => window.location.reload()} 
      />
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col font-sans border-x border-gray-100 shadow-xl">
      {/* Header Progress */}
      <div className="p-4 border-b border-gray-50">
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Question {currentIndex + 1} / {quizData.length}
          </span>
          <span className="text-xs font-bold text-blue-600">00:45</span>
        </div>
      </div>

      {/* Question Section */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {currentData.question}
        </h2>

        <div className="space-y-1">
          {currentData.options.map((option) => (
            <ChoiceCard
              key={option}
              text={option}
              isSelected={selectedOption === option}
              isCorrect={isSubmitted && option === currentData.correctAnswer}
              isWrong={isSubmitted && selectedOption === option && option !== currentData.correctAnswer}
              isDisabled={isSubmitted}
              onSelect={() => setSelectedOption(option)}
            />
          ))}
        </div>

        {isSubmitted && (
          <FeedbackCard 
            isCorrect={selectedOption === currentData.correctAnswer} 
            explanation={currentData.explanation} 
          />
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-6 bg-white border-t border-gray-100">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-95"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 transition-all flex justify-center items-center gap-2"
          >
            {isLastQuestion ? "Finish & See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;