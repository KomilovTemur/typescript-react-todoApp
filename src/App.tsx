import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </>
  );
}

export default App;
