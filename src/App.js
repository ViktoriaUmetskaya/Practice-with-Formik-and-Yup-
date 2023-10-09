import Practice from './Practice';
import './App.css';

function App() {
  const callback=(a)=>console.log(a)
   return (
    <div className="App">
      <header className='App-header'>
        <Practice string={'string'} number={2} boolean={true} object={{count:0}} array={[1,2]} callback={callback} />
      </header>['']
    </div>
  );
}

export default App;
