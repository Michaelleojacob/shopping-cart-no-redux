import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  console.log(cart);
  return (
    <div>
      <div>cart</div>
    </div>
  );
};

export default Cart;
