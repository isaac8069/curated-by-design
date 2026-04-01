import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">
        <Link to="/">Curated by Design</Link>
      </div>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;