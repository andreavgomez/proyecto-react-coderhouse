import './App.css';
import { BrowserRouter, Routes, Route, Router, UNSAFE_RouteContext } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Libreria El arte de Leer !!!'} />
        <ItemDetailContainer /> 
      </header> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/>} />
          <Route path='*' element={<h1>La pagina no existe !!!</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;