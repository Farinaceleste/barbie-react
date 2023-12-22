import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import './App.css';
// import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Auth from "./components/auth/Auth";
import { CartProvider } from "./components/context/CartContext";
import CartItem from "./components/cartitem/CartItem";
import Checkout from "./components/checkout/Checkout";



function App() {



  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <nav>{<NavBar/>}</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element = {<Home/>}/>
          <Route path="/producto:productoId" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element = {<ItemListContainer/>}/>
          <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
          <Route path = "/contacto" element = {<Contacto/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/auth" element = {<Auth/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/cartitem" element = {<CartItem/>}/>
        </Routes>
        <footer>{<Footer />}</footer>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
};

export default App;
