"use client"

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import logo from "../../public/logo.png";
import NavMenu from "./NavMenu";


function Header () {
  return (
    <header className="bg-[#101822] border-b-[1px] px-4 md:px-20 pt-7 border-gray-800 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between space-x-2 font-semibold">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              className="rounded-full"
              src={logo}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <p className="hidden text-white md:block"> - Seu Blog de Tecnologia</p>
        </div>

        <div className="flex items-center text-[#00bcff] gap-4">
          <Link href="https://github.com/ViniGSouza" target="_blank">
            <BsGithub className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/viniciusgdev/" target="_blank">
            <BsLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <hr className="border-[#0f2233] mt-4"/>
      <NavMenu />
    </header>
  )
}

export default Header;