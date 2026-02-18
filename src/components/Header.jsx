import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <h2>My styles</h2>
      </div>

      <input type="text" placeholder="search" className="search" />

      <nav className="nav-links">
        <Link to="/myorders">
          Cart <strong>({cartCount})</strong>
        </Link>

        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>

        <Link to="/login">
          <button className="btn">Log In</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
