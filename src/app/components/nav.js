import { Link } from 'react-router-dom';

const Nav = (props) => {
  console.log(props);
  return (
    <div>
      <div>nav</div>
      <div id="nav-links">
        <Link to={'/home'}>home</Link>
        <Link to={'/products'}>products</Link>
        <Link to={'/cart'}>cart {props.num}</Link>
      </div>
      <div>___________________</div>
    </div>
  );
};

export default Nav;
