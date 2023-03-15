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

  useEffect(() => {
    getQuestion();
  }, [selectedCategory]);

  function getQuestion() {
    let url = `https://opentdb.com/api.php?amount=1`;
    if (selectedCategory != "any") {
      url = `https://opentdb.com/api.php?amount=1&category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Received Data: ", data.results[0]);
        setQuestion(data.results[0]);
      });
  }

  // const handelChange = (e) => {
  //   console.log(e.target.value);
  // };
  console.log(selectedCategory);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <CategorySelector
            category={selectedCategory}
            chooseCategory={setselectedCategory}
          />
          <ScoreBoard />
        </div>

        <div className="content">
          <ResultModal />
          {question && (
            <QuestionAndAnswer question={question} getQuestion={getQuestion} />
          )}
        </div>

        <div className="next-button">
          <button className="btn">Go to Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default App;
