import React, { useState, useEffect, useRef } from "react";

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("default");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="container">
      <p>Amount of rendering: {renderCount.current}</p>
      <p>Past value: {prevValue.current}</p>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="success" onClick={focus}>
        Click Me
      </button>
    </div>
  );
}

export default App;
