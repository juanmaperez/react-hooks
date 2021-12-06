# UseReducer

### useState vs useReducer

useState can get you really far, but the idea of useReducer is:

- manage complex states as objects
- extract out the logic that updates your state

### useReducer structure

useReducer hook will receive 2 parameters:

- reducer
- initial state

and it's gonna a return 2 values:

- current state
- dispatch function

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Reducer

The reducer is basically a function that receives 2 parameters:

- the current state
- the action: is something that is gonna tell us how to update our state

and returns the new state.

```javascript
function reducer(state, action) {
  // returns the new state
}
```

### Dispatch function

- the dispatch function is what we use to update the state. It receives a parameter, the action that our reducer is gonna receive at some point

```javascript
dispatch(action);
```
