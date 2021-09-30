import React from "react";
import { NavBar } from "@/molecules";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between text-white fixed bg-inherit py-4 px-10 w-full z-50 mb-2">
      <div className="flex items-center gap-2">
        <Image width={48} height={47} src="/logo.png" />
        <span className="font-semibold text-xl hidden sm:block">
          Cybertrace
        </span>
      </div>
      <NavBar {...props} />
    </header>
  );
};

export default Header;
