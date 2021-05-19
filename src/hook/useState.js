import React, { useState } from "react";

function randomNumber() {
  console.log("Calculate...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [number, setNumber] = useState(() => {
    return randomNumber();
  });

  const [state, setState] = useState({
    text: "Number",
    date: Date.now(),
  });

  function increment() {
    // setNumber((prev) => {
    //   return prev + 1;
    // });
    setNumber((prev) => prev + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  function uploadObject() {
    setState((prev) => {
      return {
        ...prev,
        text: "New Text",
      };
    });
  }

  return (
    <div className="container">
      <div className="btn-group">
        <p>Номер: {number}</p>
        <button onClick={increment} className="success">
          Добавить
        </button>
        <button onClick={decrement} className="danger">
          Удалить
        </button>
        <button className="secondary" onClick={uploadObject}>
          Изменить
        </button>
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
