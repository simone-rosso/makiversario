import React from "react";
import Countdown from "react-countdown";
import "./App.css";

const Completionist = () => <span>You are good to go!</span>;

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
      text: "min",
      value: minutes,
    },
    {
      text: "horas",
      value: hours,
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
  return (
    <Countdown
      date={new Date("December 10, 2022 00 :00:00")}
      renderer={renderer}
      daysInHours={true}
    />
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
