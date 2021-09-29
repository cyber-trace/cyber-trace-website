import React from "react";

const Header = ({ sections }) => {
  return (
    <header className="flex justify-between">
      <div>Logo</div>
      <nav>
        {sections.map((name, index) => (
          <a key={index} href={`#${name}`} className="text-red-50">
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
