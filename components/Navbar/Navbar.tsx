import { useEffect, useState } from "react";
import { NavbarProps } from "./Navbar.types";
import { AnimatePresence, motion } from "framer-motion";
import { dataHeader } from "../Header/Header.data";
import Link from "next/link";

export function Navbar({ openMobileMenu }: NavbarProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  // Definir animaciones para la barra de navegación
  const animationNavbar = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 100,
        damping: 20,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  // Manejar el evento de scroll
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar animado cuando el usuario hace scroll */}
      <AnimatePresence mode="wait">
        {isScrolling && (
          <motion.nav
            key="navbar"
            layoutId="navbar"
            variants={animationNavbar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 text-white bg-gray-400/40 rounded-3xl backdrop-blur w-fit"
          >
            <div className="items-center hidden gap-5 md:flex">
              {dataHeader.map(({ id, name, link }) => (
                <Link
                  key={id}
                  href={link}
                  className="hover:text-secundary hover:border-b-[1px] hover:border-secundary"
                >
                  {name}
                </Link>
              ))}
              <Link href="/login" className="px-3 py-2 text-white rounded-lg">
                Login
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Menú móvil */}
      <div
        className={`${
          openMobileMenu
            ? "absolute top-20 left-1/2 transform -translate-x-1/2 z-[1] bg-transparent w-fit px-4 py-4"
            : "hidden"
        } gap-5 md:flex`}
      >
        {dataHeader.map(({ id, name, link }) => (
          <Link
            key={id}
            href={link}
            className="block hover:text-secundary hover:border-b-[1px]"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
