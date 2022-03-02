import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav';
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

const App = () => {
  // const [cart, setCart] = useState({ name: 'cart', list: ['item1'] });
  // const [what, setWhat] = useState('what');
  const [num, setNum] = useState(1);
  const decreaseNum = () => setNum(num - 1);
  const increaseNum = () => setNum(num + 1);
  // const stateObj = {
  //   num,
  //   setNum,
  //   decreaseNum,
  //   increaseNum,
  // };
  return (
    <div>
      <div>welcome to the app</div>
      {/* <Nav cart={cart} /> */}
      <Nav />
      <div>{num}</div>
      <div className="content">
        {/* <Outlet context={[cart, setCart]} /> */}
        {/* <Outlet context={{ stateObj }} /> */}
        <Outlet context={{ num, setNum, decreaseNum, increaseNum }} />
      </div>
    </div>
  );
};

export default AppRouter;
