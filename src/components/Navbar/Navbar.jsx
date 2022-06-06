import React from "react";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count"></span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
