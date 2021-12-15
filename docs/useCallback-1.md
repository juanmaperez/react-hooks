# UseCallback

### What is useCallback?

useCallback is basically a memoization technique. It's the abstraction out of the box that **React** offers for functions.

We can imagine useCallback as something like this:

```javascript
function createUseCallback(){
  let lastCallback;
  let previousDeps;
  
  return function useCallback(callback: Function, deps: Array<unknown>){
    if (!isEqual(previousDeps, deps)) {
      previousDeps = deps;
      lastCallback = callback
    }
    return lastCallback;
  }
}

export default createUseCallback()
```

### The meaning of useCallback.

Another example of memoization techniques in React is the **dependencies array of useEffect**

```javascript
React.useEffect(() => {
  window.localStorage.setItem('count', count)
}, [count]) 
```

but what happens if what we use inside our useEffect callback is a function.

```javascript
const updateLocalStorage = () => window.localStorage.setItem('count', count)

React.useEffect(() => {
  updateLocalStorage()
}, [])
```

