import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>This is extra content</p>
    </div>
  );
}

export default Count;
