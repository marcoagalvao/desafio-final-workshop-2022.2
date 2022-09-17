import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/Home'>Presentation Page</Link>
          </li>
          <li>
            <Link to='/Animal'>Animals Page</Link>
          </li>
          <li>
            <Link to='/Galeria'>Animals Gallery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    
  );
}

export default Navbar;