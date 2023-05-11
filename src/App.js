import Todo from './components/Todo'
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* este es nuestro punto de entrada para la app llamaremos al componente Todo para mostrar el formulario */}
      <Todo />
    </div>
  );
}

export default App;