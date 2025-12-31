import React from 'react';

const ChoiceCard = ({ text, isSelected, isCorrect, isWrong, isDisabled, onSelect }) => {
  let borderColor = "border-gray-200";
  let bgColor = "bg-white";
  
  if (isSelected) borderColor = "border-blue-500 ring-1 ring-blue-500";
  if (isCorrect) borderColor = "border-green-500 bg-green-50";
  if (isWrong) borderColor = "border-red-500 bg-red-50";

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onSelect}
      className={`w-full p-4 mb-3 border-2 rounded-xl flex items-center justify-between transition-all ${borderColor} ${bgColor} ${isDisabled ? 'cursor-default' : 'hover:border-blue-300'}`}
    >
      <div className="flex items-center gap-3 text-left">
        <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}>
          {isSelected && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
        </div>
        <span className={`font-medium ${isDisabled && !isSelected && !isCorrect ? 'text-gray-400' : 'text-gray-700'}`}>
          {text}
        </span>
      </div>
      
      {isCorrect && (
        <span className="text-green-600 font-bold text-xl">✓</span>
      )}
      {isWrong && (
        <span className="text-red-600 font-bold text-xl">✕</span>
      )}
    </button>
  );
};

export default ChoiceCard;