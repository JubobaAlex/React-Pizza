import './App.css';
import { Route, Routes ,  BrowserRouter } from 'react-router-dom';
import About from './pages/About'
import React from 'react';
import Home from './pages/Home'
import Burger from './pages/Burger'
import Footer from './componets/Footer'
import Pizza from './pages/Pizza';
import Order from './pages/Order'
function App() {


  return (
    <div> 
      <header>
     <div class="topnav" id="topnav">
        <a className="home" href="/">React Pizza</a>
        <a href="/about">О нас</a>
        <a href='/pizza'>Пиццы</a>
        <a href='/burger'>Бургеры</a>
      </div>
        </header>
     <BrowserRouter>
     <Routes>
      <Route index path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/pizza' element={<Pizza />}/>
      <Route path='/burger' element={<Burger />} />
      <Route path='/order' element={<Order />} />
     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}



     

export default App;
