import { NavLink } from "react-router-dom";

function Navbar() {


    return (
        <>
     

   
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className='navbar-brand' to='/'  >WikiCountries
                    </NavLink>
      </li>
      </ul>
      </div>     
      </div>
        </nav>
       
        </>
    )
}

export default Navbar;
