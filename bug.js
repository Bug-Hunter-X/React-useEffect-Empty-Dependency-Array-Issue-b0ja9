```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic:  The count value changes before this effect runs
    console.log('Count:', count); // Always prints 0
    // Do something with the count after a delay
    setTimeout(() => {
        console.log('Count after delay:', count); //Prints 0, even though count might have changed
    }, 1000);
  }, []); // Empty dependency array means this runs only once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```