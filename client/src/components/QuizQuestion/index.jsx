/* eslint-disable react/prop-types */
import "./style.css";

function QuizQuestion({ quiz, handleUserClicks }) {
  const { question, answers, id } = quiz;

  return (
    <div className="quiz-container">
      <h3>{question}</h3>
      { Array.isArray(answers) && answers.map((answer, i) => {
        return (
          <>
            <label key={i}>
              <input 
                type="radio" 
                name={id} 
                value={answer} 
                key={i}
                onChange={handleUserClicks}
                
              /> {answer}
            </label><br/>
          </>
        )
      })}
    </div>
  )
}

export default QuizQuestion;
