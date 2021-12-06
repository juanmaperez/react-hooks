# useReducer

How your implementation should looks like now:

```javascript
function countReducer(state, action) {
  return state + action;
}

function Counter({ step = 2 }) {
  const [count, setCount] = useReducer(countReducer, 0);

  const increment = () => setCount(step);

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  );
}
```

### Using objects

Until now we have used primitive values for our state and action but now we want to use objects.

So the next instructions to change our implementation are the following:

- **update the naming** used for the values returned from the useReducer to be **state and dispatch**
- **create an object as state** where the only property is count and the initial value is 0
- **dispatch an object as an action** with an unique property called step
- implement the **logic in our reducer** to make this work
- **update the UI** to show the count

&nbsp;
