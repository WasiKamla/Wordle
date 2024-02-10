import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import puzzleData from "./data/db";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * puzzleData.solutions.length);
    const randomSolution = puzzleData.solutions[randomIndex].word;
    setSolution(randomSolution);
    console.log(randomSolution);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
