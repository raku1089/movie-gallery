import React from "react";
const NavBar = (props) => {
  const { menu } = props;
  return (
    <nav>
      <ul class="navLinks">
        {menu.map((navItem) => (
          <li key={navItem}>{navItem}</li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
