import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getQuiz, sendData } from "./service";
import { useCookies } from "react-cookie";
import QuizQuestion from "../QuizQuestion";
import { Modal } from "../";

import img from "./arrow.png"


function Quiz() {
  const params = useParams();
  const [quiz, setQuiz] = useState({ language: "", listOfQuiz: [] });
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ text: "", title: ""});

  const [cookie, ] = useCookies('token');

  function handleUserClick(e) {

    const { name, value } = e.target;
    answers[name] = value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    //const formData = new FormData();
    
    const data = [];
    for(let i in answers) {
      data.push({ id: i, answer: answers[i] });
    }

    sendData({ language: quiz.language, data, token: cookie.token }).then(({ data, error }) => {
      if(error === false){
        if(data.correct_answer >= 10){
          setModalData({ text: `${data.correct_answer} sont correct`, title: 'Admis'})
        } else {
          setModalData({ text: `${data.wrong_answer} sont incirrect`, title: 'Redouble'})
        }

        console.log({ data, error, showModal, modalData });
        setShowModal(true);
      }
    })
    setAnswers({});
  }


  useEffect(() => {
    getQuiz(params.quizId, cookie.token).then(response => {
      console.log(response)
      setQuiz({ language: response.data.language, listOfQuiz: response.data.data });
    });
  }, []);


  function backToHomePage() {
    window.location = '/home';
  }

  return (
    <>
      {showModal ? <Modal title={modalData.title} text={modalData.text} /> : 
      <>
        <div className="back" onClick={backToHomePage}>
          <img src={img} alt="" />
        </div>
        <h2>{quiz.language} Quiz</h2>
        <form className="listOfQuiz" onSubmit={handleSubmit}>
          { quiz.listOfQuiz.length !== 0 &&
            quiz.listOfQuiz.map(q => <QuizQuestion key={q.id} quiz={q} handleUserClicks={handleUserClick} />)
          }
          <button type="submit">Submit</button>
        </form>
      </>}
    </>
  )
}

export default Quiz;
