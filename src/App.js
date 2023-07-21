
import './App.css';
import { useState } from 'react';
function App() {
//state- to hold inital value , (counter)
//setCounter- to set value for counter state


  const [counter,setCounter]=useState(0)

  //create a function for incrementing counter
  function incrementCounter(){
         setCounter(counter+1)
  }
  function decrementCounter(){
    if(counter!=0){
      setCounter(counter-1)
    }
   
  }
  function resetCounter(){
    setCounter(0)
  }

  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      margin:'200px'
    }} className="App">
      <header className="App-header">
        <h3>Counter App</h3>
        <h1>{counter}</h1>
        <button style={{
          backgroundColor:'green',
          color:'white',
          padding:'4px',
          margin:'5px',

        }} onClick={incrementCounter}>Increment</button>
        <button style={{
          backgroundColor:'red',
          color:'white',
          padding:'4px',
          margin:'5px',

        }} onClick={decrementCounter}>Decrement</button>
        <button style={{
          backgroundColor:'black',
          color:'white',
          padding:'4px',
          margin:'5px',

        }} onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
