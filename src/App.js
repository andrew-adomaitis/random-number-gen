import './App.css';
import Generator from './generator/generator';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <h1>Number Generator</h1>
        <p>
          Enter a minimum and maximum number, then press the
          generate button to get a random number between them
        </p>
      </div>
      <Generator />
    </div>
  );
}

export default App;
