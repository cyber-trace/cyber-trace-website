import Link from "next/link";
import React from "react";

const NavBar = ({ sections }) => {
  return (
    <nav className="gap-10 hidden md:flex">
      {sections.map((name, index) => (
        <Link key={index} href={`/en/#${name}`} className="text-red-50">
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
