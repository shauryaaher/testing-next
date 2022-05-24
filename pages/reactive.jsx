import { useState } from "react";

function Reactive() {
  const [reader, writer] = useState(0);
  return (
    <>
      <h2>{reader}</h2>
      <button onClick={() => {writer(reader + 1)}}>Increment</button>
      <button onClick={() => {writer(reader - 1)}}>Decrement</button>
    </>
  );
}

export default Reactive;
