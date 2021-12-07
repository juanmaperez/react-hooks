# UseRef

Let's use this as a new starting point:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  console.log('I am rendered!');

  return (
    <div className="flex flex-row space-x-3">
      <button onClick={updateCount} className="white-btn">
        count: {count}
      </button>
      <button onClick={() => console.log(count)} className="white-btn">
        print
      </button>
    </div>
  );
}
```

### useRef vs useState

Both hooks **persist their value between rerenders**

The main differences between useState and useRef are

- **useRef never triggers a rerender when its value is updated** and useState does.
- **useRef.current is mutable**, you can assign values directly.
- **useRef returns a single value** while useState returns an array with the state and the set function.
- **useRef can be used for DOM nodes** and useState does not.

In the example:

- when you click on the count button it **increases the count and that's reflected in the UI**
- but also prints the message in the console **I am rendered**

Let's change that to see what happens with useRef:

- switch useState by useRef and assign the value to a const **countRef**
- modify the arrow function in updateCount to **countRef.current =+ 1**
- modify the value **count** in the count button to use **countRef.current**
- update the console.log in the print button to **console.log the countRef.current**

Now neither the UI will be updated or the input will change its value, but if we click on print we see the real value of the ref.

### when useRef is useful

**Use useRef when you need information that is available regardless of component lifecycle and whose changes should NOT trigger rerenders.**

- listeners
- values that change the behaviour of your code
- information that it's not shown in the UI
