import { useState, useEffect } from 'react'

function Hello() {
  
  function byFn() {
    console.log("bye :<");
  }

  function hiFn() {
    console.log("created :3 :3 :3");
    return byFn;
  }

  useEffect(hiFn, []);
  return <h1>HELLO :3</h1>  
}

function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  );
}

export default App;
