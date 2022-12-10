import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./App.css";
/* import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite"; */

const videos = [
  "https://media.tenor.com/DH7ZhU1IRH4AAAAC/lets-party-cats.gif",
  "https://media3.giphy.com/media/rsqNkDbkCtK15S8Eoq/giphy.gif?cid=790b7611097e18ff6dc0ecd30d2f33865ad5dedb60cb0e65&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/qpP7VsPNeBtpC/giphy.gif?cid=ecf05e47j3wvu9xrk4iodwr94b7lvra7fxwfbcgwktocgw6a&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/j9ST6LnBInWPm/giphy.gif?cid=790b761111ad9a0d74628610ee7e13505cbdfa2319a34b10&rid=giphy.gif&ct=g",
  "https://media.tenor.com/7UCfXiVU8fkAAAAd/get-it-party.gif",
  "https://thumbs.gfycat.com/AlienatedPolishedBunny-max-1mb.gif",
];

/* const app = initializeApp(firebaseConfig);
const db = getFirestore(app); */

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

const CounterCompleted = () => {
  const [step, setStep] = useState(localStorage.getItem("step") || 0);
  const [link, setLink] = useState(localStorage.getItem("maki"));

  /*   useEffect(() => {
    getLinks(db);
  }, []); */

  const onSelect = (v) => {
    localStorage.setItem("maki", v);
    setLink(v);
  };

  const onTriggerStep = () => {
    localStorage.setItem("step", !step);
    setStep(!step);
  };

  /*   async function getLinks(db) {
    const linksCol = collection(db, "list_items");
    const linkSnapshot = await getDocs(linksCol);
    console.log(linkSnapshot);
    const linkList = linkSnapshot.docs.map((doc) => doc.data());
    console.log("linkList", linkList);
    return linkList;
  } */

  return (
    <>
      <h1>FELIZ MAKIVERSARIO!!!</h1>
      {link ? (
        <img src={link} width="300" />
      ) : (
        <>
          <img
            src="https://acegif.com/wp-content/uploads/firework-12.gif"
            height={"100px"}
            width={"200px"}
          />
          <h3 className="subtitle">
            elige cuidadosamente como celebrarlo, solo tienes una posibilidad y no hay vuelta atras...
          </h3>
          <div className={"div-buttons"}>
            {videos.map((v, i) => {
              return (
                <button
                  className="buttons-options"
                  key={v}
                  onClick={() => onSelect(v)}
                >
                  Opción {i + 1}
                </button>
              );
            })}
          </div>
   {/*        <button onClick={() => setStep(!onTriggerStep)}>
            {step === 1 ? "<-- Vuelve al temporizador" : "Ve al premio -->"}
          </button> */}
        </>
      )}
    </>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed, children }) => {
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
    return <CounterCompleted />;
  } else {
    return (
      <>
        <h1>MAKIVERSARIO EN</h1>
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
  const date = "2022-12-11T01:00:00";
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
        <Counter>
          <CounterCompleted />
        </Counter>
      </main>
    </div>
  );
}

export default App;
