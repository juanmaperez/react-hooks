# useReducer

How your implementation should looks like now:

```javascript
function countReducer(state, action) {
  return {
    count: state.count + action.step
  };
}

function Counter({ step = 2 }) {
  const [{ count }, dispatch] = useReducer(countReducer, {count: 0});

  const increment = () => dispatch({step}});

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  );
}
```

### Using traditional action

We got our reducer using objects but now we need to implement a traditional action and our reducer must support that action.

To achieve that we need to implement an interface a bit more interactive:

- **copy and paste the next interface** in our counter component

```javascript
return (
  <>
    <h2 className="text-4xl">{count}</h2>
    <div className="flex flex-row">
      <button className="counter-btn" onClick={increment}>
        I
      </button>
      <button className="counter-btn" onClick={decrement}>
        D
      </button>
      <button className="counter-btn" onClick={reset}>
        R
      </button>
    </div>
  </>
);
```

- **implement the functions** decrement and reset in the component (following the same structure of increment)
- **Pass in the dispatch** an action with a property **type** that can be `INCREMENT`, `DECREMENT` or `RESET`
- include step in the action only when it's relevant
- **Implement in the reducer a switch** to handle each type

&nbsp;

### Extra credit: Using Enums for types and action creators

Normally when you implement the reducer pattern you will use a enum for the actions type and action creators instead of passing the.

Action creators are basically functions that return the action that we will need to trigger that action.

- **Implement an enum** called CounterActionTypes
- Create **3 different action creators** for each action (`INCREMENT`, `DECREMENT` or `RESET`). Remember that some of them need to receive a parameter and others not.
