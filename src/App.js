import React, {useState} from 'react';
import Registration from './Practice';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
   const increment=()=>{
     setCount(count+1)
 }
   return (
    <div className="App">
      <header className='App-header'>
        <Registration /> 
      </header>['']
    </div>
  );
}
export default App;
