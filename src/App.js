import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';
import Counter from './components/Counter';
import PersonalData from './components/PersonalData';

function App() {
  const date = "31/03/2000";

  return (
    <div className="App">
      <MainMenu time={date} />
      <Counter />
      <PersonalData />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
