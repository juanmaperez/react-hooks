import { useRef, useState } from 'react';

function Form() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  return (
    <div className="flex flex-row space-x-3">
      <button onClick={updateCount} className="counter-btn">
        count: {count}
      </button>
      <button onClick={() => console.log(count)} className="white-btn">
        print
      </button>
    </div>
  );
}

export default Form;
