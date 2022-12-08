import React from "react";
import Countdown from "react-countdown";

export function App() {
  return (
    <div className="App">
      <main>
        <Countdown date={Date.now() + 100000} />
      </main>
    </div>
  );
}

export default App;
