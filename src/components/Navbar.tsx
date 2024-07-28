import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex py-3 px-6 rounded-md justify-between items-center bg-[#F8EDED]">
      <Image src={logo} alt="logo" />
      <div >
        <Link
          className="text-lg mx-2 font-semibold text-[#FF8225] hover:text-[#B43F3F]"
          href={"https://www.linkedin.com/in/mridul-sehgal-937754238/"}
        >
          Linkedin
        </Link>
        <Link
          className="text-lg mx-2 font-semibold text-[#FF8225] hover:text-[#B43F3F]"
          href={"https://github.com/mridul-sehgal"}
        >
          Github
        </Link>
        <Link
          className="text-lg mx-2 font-semibold text-[#FF8225] hover:text-[#B43F3F]"
          href={"https://github.com/mridul-sehgal/sortingVisualizer"}
        >
          Github Repo
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
