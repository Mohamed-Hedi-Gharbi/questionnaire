import "./style.css";

// eslint-disable-next-line react/prop-types
function Modal({ title, text }) {
  
  function reloadPage() {
    window.location.reload();
  }

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <h2>{ title }</h2>
          <p>{ text }</p>
          <button onClick={reloadPage}>close</button>
        </div>
      </div>
    </>
  )
}

export default Modal;
