//https://opentdb.com/api_config.php

import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import ResultModal from "./components/ResultModal";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setselectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctScore, setCorrectScore] = useState(0);
  const [inCorrectScore, setInCorrectScore] = useState(0);

  useEffect(() => {
    getQuestion();
  }, [selectedCategory]);

  function getQuestion() {
    setIsCorrect(null);
    let url = `https://opentdb.com/api.php?amount=1`;
    if (selectedCategory !== "any") {
      url = `https://opentdb.com/api.php?amount=1&category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      });
  }

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer == question.correct_answer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setCorrectScore(correctScore + 1);
    } else {
      setInCorrectScore(inCorrectScore + 1);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <CategorySelector
            category={selectedCategory}
            chooseCategory={setselectedCategory}
          />
          <ScoreBoard
            correctScore={correctScore}
            inCorrectScore={inCorrectScore}
          />
        </div>

        <div className="content">
          {isCorrect != null && (
            <ResultModal
              isCorrect={isCorrect}
              getQuestion={getQuestion}
              question={question}
            />
          )}

          {question && (
            <QuestionAndAnswer
              question={question}
              getQuestion={getQuestion}
              answerQuestion={handleQuestionAnswered}
            />
          )}
        </div>

        <div className="next-button">
          <button onClick={getQuestion} className="btn button">
            Go to Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
