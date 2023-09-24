import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'; 

import { useEffect } from 'react'
import { db } from "./firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';

function App() {

  const productRef = doc(db, "products", "35QbqwPJTxQstuJzKCWV");

  const getProduct = () => {
    getDoc(productRef).then((snapshot => {
      if (snapshot.exists()) {
        //console.log(snapshot)
        console.log({ id: snapshot.id, ...snapshot.data() })
      }
    }))
  }

  useEffect(() => {
    getProduct()
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<checkout />} />
            <Route path='*' element={<h1>La pagina no existe !!!</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;