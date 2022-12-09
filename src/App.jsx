import React from "react";
import Countdown from "react-countdown";
import "./App.css";

const Completionist = () => <span>FIESTAAAA!</span>;

const Box = ({ children, text }) => {
  return (
    <div className="numbers">
      <div className="number-value">{children}</div>
      <div className="number-text">{text}</div>
    </div>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  const boxes = [
    {
      text: "dia",
      value: days,
    },
    {
      text: "horas",
      value: hours,
    },
    {
      text: "min",
      value: minutes,
    },
    {
      text: "segundos",
      value: seconds,
    },
  ];

  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <h1>MAKIVERSARIO en</h1>
        {boxes.map(({ text, value }) => {
          return (
            <Box key={text} text={text}>
              {value}
            </Box>
          );
        })}
      </>
    );
  }
};

const Counter = () => {
  const date = "2022-12-10T00:00:00";

/*   var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  var actiondate = new Date(d); */

  return (
    <Countdown date={new Date(date.replace(/\s/, 'T'))} renderer={renderer} daysInHours={true} />
  );
};

export function App() {
  return (
    <div className="App">
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
