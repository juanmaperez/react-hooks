# useCallback

### When to use it

- Shall I wrap every single function inside my component in a useCallback? 
  - No, the cost of creating a function inside a component it's minimal and using useCallback has a cost as well.
- When it's worth using it?
  - I would say that mainly graphs, animations or components that re-renders constantly (I used it in the main search page of Sainsbury's because there was a lot of pieces of state being updated constantly).


What the React docs says:

**This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).**
  