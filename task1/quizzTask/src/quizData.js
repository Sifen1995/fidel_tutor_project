

const quizData = [
  {
    "id": 1,
    "question": "Which HTML element is used to define important text?",
    "options": ["<important>", "<strong>", "<i>", "<b>"],
    "correctAnswer": "<strong>",
    "explanation": "The <strong> tag is a semantic element that indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render it in bold."
  },
  {
    "id": 2,
    "question": "In the CSS Box Model, what is the area between the content and the border?",
    "options": ["Margin", "Padding", "Outline", "Spacing"],
    "correctAnswer": "Padding",
    "explanation": "Padding is the space inside the border, creating distance between the element's content and its edge. Margin is the space outside the border."
  },
  {
    "id": 3,
    "question": "Which JavaScript method is used to parse a JSON string into a JavaScript object?",
    "options": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
    "correctAnswer": "JSON.parse()",
    "explanation": "The JSON.parse() method takes a JSON string and transforms it into a JavaScript object, allowing for easy manipulation of the data."
  },
  {
    "id": 4,
    "question": "What is the primary purpose of React's 'useState' hook?",
    "options": ["To fetch data", "To handle side effects", "To manage local component state", "To navigate between pages"],
    "correctAnswer": "To manage local component state",
    "explanation": "useState allows functional components to store and update data that changes over time, triggering a re-render when the state updates."
  },
  {
    "id": 5,
    "question": "Which CSS property is used to change the text color of an element?",
    "options": ["text-color", "fgcolor", "color", "font-color"],
    "correctAnswer": "color",
    "explanation": "In CSS, the 'color' property specifically defines the foreground color of text content."
  },
  
];
export default quizData;