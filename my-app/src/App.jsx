import { useState } from "react";

function App() {
  // Step 1: Create state variables
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Day 7 Task 🚀</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>

      <hr />

      {/* Live Text Preview */}
      <h2>Live Text Preview</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;