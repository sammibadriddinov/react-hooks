import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("users");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   console.log("render " + user);
  // }, [user]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("Clean");
    };
  }, [user]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);

  return (
    <div className="container">
      <p>Users: {user}</p>

      <div className="btn-group">
        <button onClick={() => setUser("users")} className="success">
          Web Developer
        </button>
        <button onClick={() => setUser("posts")} className="danger">
          Android Developer
        </button>
        <button onClick={() => setUser("todos")} className="secondary">
          Ios Developer
        </button>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}

export default App;
