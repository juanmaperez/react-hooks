# UseRef

```javascript
function Form() {
  const inputRef = useRef();

  return (
    <>
      <input className="input" type="text" />
    </>
  );
}
```

### Interacting with the DOM

Our `form` component has already created a ref with useRef for our input so

Add to that **inputRef** the actual input in the DOM

```javascript
ref = { inputRef };
```

Now you can console the **inputRef** in your component and see the different values(the property current should have the input)

```javascript
console.log(inputRef);
```

Pretty cool! and now print in the console the value for the current property inside the ref

```javascript
console.log(inputRef.current);
```

What? what happened?

The reason for this behavior is because

**The input is not assigned to the ref until the DOM is printed, and that happens after the console.log**

On the other hand, inside of an `useEffect` we would be able to interact with that DOM node.

Try this instead of the console.log

```javascript
inputRef.current.focus();
```

And now wrap the same code but inside of a useEffect

```javascript
useEffect(() => {
  inputRef.current.focus();
}, []);
```
