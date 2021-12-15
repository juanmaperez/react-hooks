# UseRef

Let's use this as a new starting point:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  return (
    <div className="flex flex-row space-x-3">
      <button onClick={updateCount} className="counter-btn">
        count: {count}
      </button>
    </div>
  );
}
```

### useRef as reference if component is mounted

Let's make an easy example to use this useRef. We want to know before setting the new value for count if the component is visible.

We will make use of setTimeout to delay 3 seconds the delay of setCount and in the meantime we will remove the counter from the view with the hide button.

- **Add a timeout of 3 seconds** around the updateCount function in the onClick.

```javascript
onClick={() => setTimeout(updateCount, 3000)}
```

- Now click on the **count button** and right after **click on hide**
- You should see an error in the console.

Let's fix that:

- **Create a ref called isMounted** and initialize it without value.
- **Create an useEffect with an empty dependency array**
- Inside of the callback function of the useEffect **set isMounted.current to true**
- **In the return callback of the useEffect**, set the value of **isMounted.current as false**
- In the updateCount function just call setCount if **isMounted.current is true**

**Now make the same steps that were causing the error**
