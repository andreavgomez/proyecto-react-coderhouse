import './App.css';
import NavBar from './components/NabBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Libreria El arte de Leer !!!'} />
      </header>
    </div>
  );
}

export default App;