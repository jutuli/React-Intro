import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-2 items-center justify-center p-10 m-10 border">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
