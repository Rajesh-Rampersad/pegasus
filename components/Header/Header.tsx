// Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { Navbar } from "../Navbar";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-between items-center px-5 md:px-0">
        <Link href="/">
          <h1 className="font-medium">PegasusSportware</h1>
        </Link>

        {/* Aquí corregimos la clase `md:hidden` */}
        <CiMenuFries
          className="block text-2xl md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:+554196180589"
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephone />
            <span className="md:block">Telefone: +55 41 9618-0589</span>
          </Link>
          {/* <Link href="/login" className="px-3 text-white rounded-lg bg-secondary hover:bg-black">Login</Link> */}
        </div>
      </div>
    </div>
  );
}
