import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Thanuja"
        School="Vignan's Institute of Engineering for Women"
        Total={284}
        goal={4}
      />
    </div>
  );
}

export default App;