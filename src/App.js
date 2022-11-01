import "./styles.css";
import React from "react";

function App() {
  const Fruits = [
    { name: "Apple" },
    { name: "Apricot" },
    { name: "Honeyberry" },
    { name: "Papaya" },
    { name: "Jambul" },
    { name: "Plum" },
    { name: "Lemon" },
    { name: "Pomelo" }
  ];

  return (
    <div className="App">
      <h2>List of fruit</h2>
      {Fruits.map((data) => (
        <p>{data.name}</p>
      ))}
    </div>
  );
}
export default App;
