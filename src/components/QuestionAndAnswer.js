import "bootstrap/dist/css/bootstrap.css";

function QuestionAndAnswer({ question, answerQuestion }) {
  const options = ["1", "2", "3"];
  const answers = [...question.incorrect_answers, question.correct_answer];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledAnswers = shuffle(answers);

  return (
    <div>
      <div className="question">
        <center>
          <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
        </center>
      </div>
      <div className="options">
        {shuffledAnswers.map((answer, index) => (
          <button key={index} className=" btn option">
            <p
              onClick={() => {
                answerQuestion(answer);
              }}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionAndAnswer;
