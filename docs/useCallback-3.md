# useCallback

### Implementing useCallback with React Memo 

Let's do some code.

React.Memo wraps a component in order to not rerender a component when the props passed to it, doesn't change.

In our example we have some buttons where each of them is an item. When we click on any of them we print which one we selected on the list and this updates the state of the parent component.

- Open the console and see **how many logs we are creating for every click**.
- Wrap the button component into **React.memo()**

```javascript
const Button = React.memo()
```
Since the buttons don't care about the count, they should not be updated, right? But what about the **select function**?

Yeah! it's brand-new each time.

- So, wrap the function select in a useCallback hook
- Click on any item in the list and check the console

