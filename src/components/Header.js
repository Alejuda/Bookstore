import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </header>
);

export default Header;
