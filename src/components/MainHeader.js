import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li> 
            <Link to="/welcome">Welcome</Link> // prevent the browser default behaviour pf refresh when clivk tothe link bcoz it losses the state.
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
