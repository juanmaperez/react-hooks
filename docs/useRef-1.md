# UseRef

### History of ref

References were used in React basically to access to DOM nodes.

```javascript
this.inputRef = React.createRef();

return <input ref={inputRef} type="text" />;
```

### useRef initialization and accessing the value.

useRef brought a new opportunity to use refs in the same way than before but also as a **reference to a value**:

We can initialize useRef in different ways:

- with a value, passed when the hook is called

```javascript
const myRef = useRef(4);
```

- as undefined

```javascript
const myRef = useRef();
```

and we can access to the ref value through the property **current**, always present in the ref `myRef.current`.

### Assigning a value.

When you initialize the reference as undefined, you can assign a value through the DOM

```javascript
return <input ref={inputRef} type="text" />;
```

and from now on this ref it's gonna reference the DOM node where it was initialize, giving us access to the properties of that node.

And also we can **assign directly the value to the property current** of the ref

```javascript
myRef.current = 21;
```
