import "bootstrap/dist/css/bootstrap.css";

function QuestionAndAnswer() {
  return (
    <div>
      <div className="question">
        <h2>How many sides are there in a triangle?</h2>
      </div>
      <div className="options">
        <div className="option">
          <p>Option 1</p>
        </div>
        <div className="option">
          <p>Option 2</p>
        </div>
        <div className="option">
          <p>Option 3</p>
        </div>
        <div className="option">
          <p>Option 4</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionAndAnswer;
