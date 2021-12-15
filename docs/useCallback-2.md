# useCallback

Well, if your answer was the function itself, you were right

```javascript
const updateLocalStorage = () => window.localStorage.setItem('count', count)

React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage])
```

but there is a problem. 

Every single time that the component containing that code, re-renders (let's say its parent component re-renders), **updateLocalStorage** is a brand-new function. Causing the useEffect to run again.

### Using useCallback

So the solution to this problem is using useCallback.

**useCallback receives the callback and the dependencies used by that callback**

```javascript
useCallback(fn, deps)
```

So the definitive solution would be something like this

```javascript
const updateLocalStorage = useCallback(() => window.localStorage.setItem('count', count), [count])

React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage])
```
