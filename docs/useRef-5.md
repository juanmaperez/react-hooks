# useRef completed!

Here it is how it should look like your task!


```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const isMounted = useRef()
    
  useEffect(() => {
    isMounted.current = true;
      
    return () => {
      isMounted.current = false;
    }
  },[]); 

  const updateCount = () => {
    if(isMounted.current) {
      setCount(count + 1)
    }
  };

  return (
    <div className="flex flex-row space-x-3">
      <button onClick={() => setTimeout(updateCount, 3000)} className="counter-btn">
        count: {count}
      </button>
    </div>
  );
}
```

