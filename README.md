# React useEffect Empty Dependency Array Issue
This example demonstrates a common error in React when using the `useEffect` hook with an empty dependency array.  The effect only runs once after the component mounts, ignoring subsequent state updates. This can lead to unexpected behavior if the effect relies on state changes.

## Bug
The `bug.js` file contains a functional component that updates a count state using `useState`.  An `useEffect` hook is used to log the count.  However, because the dependency array is empty, the effect only logs the initial value of the count (0) even though the button increments the count.