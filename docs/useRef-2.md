# UseReducer

This is what you got in your counter component:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  );
}
```

### Implementing a basic useReducer

Using useReducer for a counter is overkilled but let's try that out to see how it would look like

Our setCount function should remain as it is, receiving the same value. so it's the reducer the one managing the logic:

- Replace useState with **useReducer**
- Create a function called **countReducer**
- **Pass the countReducer** as first parameter to useReducer
- **Implement reducer's logic** to make the action that we are dispatching work updating our state

&nbsp;
