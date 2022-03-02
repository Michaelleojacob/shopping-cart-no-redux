import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav';

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
      <Nav num={num} />
      <div className="content">
        {/* <Outlet context={[cart, setCart]} /> */}
        {/* <Outlet context={{ stateObj }} /> */}
        <Outlet context={{ num, setNum, decreaseNum, increaseNum }} />
      </div>
    </div>
  );
};

export default App;
