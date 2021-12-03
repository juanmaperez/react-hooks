import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <button
      className="block border rounded-full bg-white h-20 w-20 shadow-sm font-bold"
      onClick={increment}
    >
      {count}
    </button>
  );
}

export default Counter;
