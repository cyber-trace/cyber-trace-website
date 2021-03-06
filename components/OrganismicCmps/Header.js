import React from "react";

import Image from "next/image";

import { NavBar } from "@/molecules";
import Link from "next/link";
const myLoader = ({ src }) => {
  return `${src}`;
};
const Header = (props) => {
  return (
    <header className="text-white fixed bg-inherit py-4 px-10 w-full z-50 ">
      <div className="flex max-w-screen-2xl items-center justify-between mx-auto">
        <Link href="/en">
          <div className="flex items-center gap-2">
            <Image
              loader={myLoader}
              width={48}
              height={47}
              src="/logo.png"
              alt="Cyber-Trace"
            />
            <span className="font-semibold text-base hidden sm:block">
              Cybertrace
            </span>
          </div>
        </Link>
        <NavBar {...props} />
      </div>
    </header>
  );
};

export default Header;
