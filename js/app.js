
const { useState } = React;
const { render } = ReactDOM;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hola mundo</h1>
      <p>Con React</p>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
