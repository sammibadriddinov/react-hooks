import React, { useState, useEffect, useMemo } from "react";

function complete(num) {
  console.log("CompleteCompute");
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(8);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "crimson" : "white",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complete(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles was change");
  }, [styles]);

  return (
    <div className="container">
      <p style={styles}>Amount: {computed}</p>
      <button className="success" onClick={() => setNumber((prev) => prev + 1)}>
        Add
      </button>
      <button className="danger" onClick={() => setNumber((prev) => prev - 1)}>
        Delete
      </button>
      <button className="secondary" onClick={() => setColored((prev) => !prev)}>
        Edit
      </button>
    </div>
  );
}

export default App;
