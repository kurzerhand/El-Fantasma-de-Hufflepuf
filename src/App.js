<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
=======
import Todo from './components/Todo'
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* este es nuestro punto de entrada para la app llamaremos al componente Todo para mostrar el formulario */}
      <Todo />
>>>>>>> master
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> master
