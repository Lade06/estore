import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <h1 className="navbar-brand">Ladeh Delicacies</h1>
          <a className="navbar-brand" href="/">Home</a>
          <a className="navbar-brand" href="/">Products</a>
          <a className="navbar-brand" href="/">Services</a>
        
          {/* <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Features</a> */}

          <FaShoppingCart  className="mr-5" color="white" size="3em" />
          <form className="d-flex" role="search">
            <input id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success bg-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
