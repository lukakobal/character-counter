import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <h1>Character Counter ✍️</h1>
      <textarea
        placeholder="Type spomething..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <p>Character Count : {text.length}</p>
    </div>
  );
}
