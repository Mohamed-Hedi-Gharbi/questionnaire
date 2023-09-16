import "./style.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
    <main className="btn-quiz-container">
      <div className="quiz-btn" >
        <Link to="/quiz/javascript">JvaScript Quiz </Link> 
      </div>
      <div className="quiz-btn" >
          <Link to="/quiz/cs">C# Quiz </Link>
      </div>
      <div className="quiz-btn" >
          <Link to="/quiz/php">PHP Quiz </Link> 
      </div>
    </main>
    </>
  )
}

export default Main;
