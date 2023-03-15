import "bootstrap/dist/css/bootstrap.css";
import CategorySelector from "./components/CategorySelector";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import ResultModal from "./components/ResultModal";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <CategorySelector />
          <ScoreBoard />
        </div>

        <div className="content">
          <ResultModal />
          <QuestionAndAnswer />
        </div>

        <div className="next-button">
          <button className="btn">Go to Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default App;
