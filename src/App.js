import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import './App.css';
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./checkout/Checkout";
import User from "./user/User";


function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>{<NavBar/>}</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element = {<Home/>}/>
          <Route path="/producto:productoId" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element = {<ItemListContainer/>}/>
          <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
          <Route path = "/contacto" element = {<Contacto/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/user" element = {<User/>}/>
           
        </Routes>
        <footer>{<Footer />}</footer>
      </BrowserRouter>
    </div>
  )
};

export default App;
