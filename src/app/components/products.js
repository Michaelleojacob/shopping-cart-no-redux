import { useOutletContext } from 'react-router-dom';

const Products = () => {
  const thing = useOutletContext();
  console.log(thing);
  const { num, increaseNum, decreaseNum } = thing;
  // const { num, increaseNum, decreaseNum } = thing.stateObj;
  return (
    <div>
      <div>products</div>
      <div>
        <button onClick={decreaseNum}>-</button>
        {num}
        <button onClick={increaseNum}>+</button>
      </div>
    </div>
  );
};

export default Products;
