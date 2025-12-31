import React from 'react';

const FeedbackCard = ({ isCorrect, explanation, titleOverride }) => {
  const bgColor = isCorrect ? "bg-green-50" : "bg-red-50";
  const textColor = isCorrect ? "text-green-900" : "text-red-900";
  const title = titleOverride || (isCorrect ? "Correct! Well done." : "Not quite right.");

  return (
    <div className={`mt-2 p-4 rounded-xl border ${isCorrect ? 'border-green-100' : 'border-red-100'} ${bgColor}`}>
      <h3 className={`font-bold text-sm mb-1 ${textColor}`}>
        {title}
      </h3>
      <p className="text-gray-600 text-xs leading-relaxed">
        {explanation}
      </p>
    </div>
  );
};

export default FeedbackCard;