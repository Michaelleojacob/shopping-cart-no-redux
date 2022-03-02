import { Link } from 'react-router-dom';

const Nav = (props) => {
  // console.log(props);
  // const { list } = props.cart;
  return (
    <div>
      <div>nav</div>
      {/* <div>{list.length}</div> */}
      <Link to={'/home'}>home</Link>
      <Link to={'/products'}>products</Link>
      <Link to={'/cart'}>cart</Link>
      <div>___________________</div>
    </div>
  );
};

export default Nav;
