import "bootstrap/dist/css/bootstrap.css";

function ResultModal() {
  return (
    <div className="overlay-container">
      <div className="overlay"></div>
      <div className="won-card">
        <h1>Its Correct!</h1>
        <br></br>
        <h1>You've earned 1 point!</h1>
        <br></br>
        <br></br>
        <div className="next-button">
          <button className="btn">Go to Next Question</button>
        </div>
      </div>

      <div className="lost-card">
        <h1>Its Incorrect!</h1>
        <br></br>
        <br></br>
        <h4>The Correct Answer is: </h4>

        <h2>This is the correct answer you idiot!</h2>

        <br></br>
        <div className="next-button">
          <button className="btn">Go to Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default ResultModal;