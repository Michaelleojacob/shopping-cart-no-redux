import { Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav';
import Home from './components/home';
import Cart from './components/cart';
import Products from './components/products';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const [cart, setCart] = useState({ name: 'cart', list: ['item1'] });
  return (
    <div>
      <div>welcome to the app</div>
      <Nav cart={cart} />
      <div className="content">
        <Outlet context={[cart, setCart]} />
      </div>
    </div>
  );
};

export default App;
