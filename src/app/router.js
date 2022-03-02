import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import Home from './components/home';
import Cart from './components/cart';
import Products from './components/products';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
