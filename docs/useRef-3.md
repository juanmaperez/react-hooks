# useReducer

How your implementation should looks like now:

```javascript
function countReducer(state, action) {
  return action;
}

function Counter() {
  const [count, setCount] = useReducer(countReducer, 0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  );
}
```

### Using a step as action to update the state

Now our counter is gonna a receive a prop called step, and that prop is what we are gonna use to update our state.

What we need to do for implementing the new feature is

- **add a prop called step** in the counter which defaults to 2 if it's not passed
- **pass the step to setCount** to be used in our reducer
- implement the **logic in our reducer** to make this work

&nbsp;
