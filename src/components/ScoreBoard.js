import "bootstrap/dist/css/bootstrap.css";

function ScoreBoard() {
  return (
    <div className="results">
      <div className="won">
        <center>
          <h2>Won</h2>
          <h1>25</h1>
        </center>
      </div>
      <div className="lost">
        <center>
          <h2>Lost</h2>
          <h1>30</h1>
        </center>
      </div>
    </div>
  );
}

export default ScoreBoard;
