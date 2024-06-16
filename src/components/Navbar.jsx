import React from "react";
import Logo from "./Logo";
import Uls from "./UIs";
import DarkModeToggle from "./DarkModeToggle";
import NavbarToggle from "./NavbarToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between   pt-[43px]">
      <Logo />
      <div className="flex">
        <div className="hidden lg:flex items-center">
          <Uls />
          <DarkModeToggle />
        </div>
        <div className="flex gap-3">
          <NavbarToggle />
          <button className="bg-main font-bold p-3 rounded-md">Logout</button>
        </div>
      </div>
    </div>
  );
}
