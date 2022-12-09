import React, { useState } from "react";
import Countdown from "react-countdown";
import "./App.css";

const Completionist = () => <span>FIESTAAAA!</span>;

const videos = [
  "https://media.tenor.com/DH7ZhU1IRH4AAAAC/lets-party-cats.gif",
  "https://media3.giphy.com/media/rsqNkDbkCtK15S8Eoq/giphy.gif?cid=790b7611097e18ff6dc0ecd30d2f33865ad5dedb60cb0e65&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/qpP7VsPNeBtpC/giphy.gif?cid=ecf05e47j3wvu9xrk4iodwr94b7lvra7fxwfbcgwktocgw6a&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/j9ST6LnBInWPm/giphy.gif?cid=790b761111ad9a0d74628610ee7e13505cbdfa2319a34b10&rid=giphy.gif&ct=g",
  "https://media.tenor.com/7UCfXiVU8fkAAAAd/get-it-party.gif",
  "https://thumbs.gfycat.com/AlienatedPolishedBunny-max-1mb.gif",
];

const Box = ({ children, text }) => {
  return (
    <div
      className="numbers"
      style={children === 0 ? { background: "red" } : { background: "yellow" }}
    >
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
    const [link, setLink] = useState();
    // Render a complete state
    return (
      <>
        <Completionist />
        <p>elige como celebrarlo</p>
        {link ? (
          <img src={link} />
        ) : (
          videos.map((v, i) => {
            return (
              <button onClick={() => setLink(v)}>
                `lo celebraré como en link ${i}`
              </button>
            );
          })
        )}
      </>
    );
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
  const date = "2022-12-11T00:00:00";

  /*   var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  var actiondate = new Date(d); */

  return (
    <Countdown
      date={new Date(date.replace(/\s/, "T"))}
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
