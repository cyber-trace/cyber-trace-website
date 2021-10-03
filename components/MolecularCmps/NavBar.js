import React from "react";

const NavBar = ({ sections }) => {
  return (
    <nav className="gap-10 hidden md:flex">
      {sections.map((name, index) => (
        <a key={index} href={`#${name}`} className="text-red-50">
          {name}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
