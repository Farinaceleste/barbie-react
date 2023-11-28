import { ButtonList } from "./components/ButonList/ButonList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import './App.css';
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Contacto from "./pages/Contacto/Contacto";




function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>{<NavBar/>}</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element = {<Home/>}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path = "/contacto" element = {<Contacto/>}/>
          <Route path = "productos/:productoId" element = {<ItemDetail/>}/>
          
        </Routes>
        <footer>{<Footer />}</footer>
      </BrowserRouter>
    </div>
  )
};

export default App;
