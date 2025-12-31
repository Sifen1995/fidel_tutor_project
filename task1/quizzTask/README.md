LMS Micro-Assessment Quiz System
Objective
The objective of this project is to redesign a Learning Management System (LMS) quiz interface into a modern, interactive system. The focus is on "Micro-assessments"—short, frequent quizzes that reinforce learning without overwhelming the student. The system provides immediate post-submission results and detailed correct-answer explanations to facilitate learning.

🚀 Key Features
Focus Mode: A distraction-free UI that removes unnecessary navigation to keep students engaged with the assessment.

Dynamic Feedback: Logic that compares user input against a data object to provide instant results upon submission.

Detailed Explanations: Every question includes a post-submission explanation card to clarify why an answer is correct or incorrect.

Mobile-First Design: Responsive layout with large, tappable radio buttons and checkboxes for easy use on smartphones and tablets.

Accessibility (A11y): Uses high-contrast colors for "Correct" (Green) and "Incorrect" (Red) states, supplemented by icons (✓/✕) to ensure the interface is distinguishable for color-blind users.

Progress Tracking: A real-time progress bar and question counter to help students manage their time.

🛠 Tech Stack
Frontend: React (Functional Components, Hooks)

Styling: Tailwind CSS (Utility-first CSS for modern, responsive UI)

Data Handling: Local JSON

State Management: React useState for handling "Live State" (tracking current index, selected answers, and scoring)

📊 Quiz Data Structure
The project uses a local JSON structure to store quiz content. This approach was chosen to ensure high-quality "Micro-assessment" content, specifically to include the detailed explanations required by the project brief.

Example Schema:

JSON

{
  "id": 1,
  "question": "Which hook is used for side effects in React?",
  "options": ["useState", "useEffect", "useContext", "useReducer"],
  "correctAnswer": "useEffect",
  "explanation": "useEffect allows you to perform side effects (fetching data, subscriptions) in functional components."
}
📂 Project Structure
QuizPage.jsx: The main container managing the logic, state, and flow of the quiz.

choice.jsx: A reusable component for the interactive answer options.

explanationCard.jsx: A conditional component that displays immediate feedback and learning explanations.

ResultScreen.jsx: The final dashboard showing the total score and a detailed review of all questions.

quizData.json: A local array of 5 high-quality frontend development questions.

⚙️ Installation & Setup
Clone the repository:

Bash

git clone [your-github-link-here]
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev