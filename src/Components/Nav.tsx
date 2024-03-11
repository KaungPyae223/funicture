import React, { useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Badge,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const Nav = useRef();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [scrollPos, setScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [ydown, setydown] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrollPos(currentScrollPos);
    if (
      Nav.current.offsetHeight < window.scrollY &&
      Nav.current.offsetHeight > prevScrollPos
    ) {
      Nav.current.classList.add("fixed", "-translate-y-[100%]");
    } else if (window.scrollY == 0) {
      Nav.current.classList.remove("fixed", "-translate-y-[100%]");
    } else if (
      window.scrollY > prevScrollPos &&
      Nav.current.offsetHeight < window.scrollY &&
      ydown
    ) {
      Nav.current.classList.add("-translate-y-[100%]");
      setydown(false);
    } else if (
      window.scrollY < prevScrollPos &&
      Nav.current.offsetHeight < window.scrollY &&
      !ydown
    ) {
      Nav.current.classList.remove("-translate-y-[100%]");
      setydown(true);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [scrollPos]);

  useEffect(() => {
    setPrevScrollPos(scrollPos);
  }, [scrollPos]);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        onClick={() => {
          setActiveNav(0);
        }}
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium relative px-3 py-1.5 rounded-lg overflow-hidden"
      >
        <NavLink
          to={"/"}
          className="flex items-center z-10 text-xl duration-300"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        onClick={() => {
          setActiveNav(1);
        }}
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium relative px-3 py-1.5 rounded-lg overflow-hidden"
      >
        <NavLink
          to={"/products"}
          className="flex items-center z-10 text-xl duration-300"

        >
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium relative px-3 py-1.5 rounded-lg overflow-hidden"
      >
        <NavLink
          to={"/about"}
          className="flex items-center z-10 text-xl duration-300"
          
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium px-3 py-1.5 rounded-lg overflow-hidden relative"
      >
        <NavLink
          to={"/customers"}
          className="flex items-center z-10 text-xl duration-300"
          
        >
          Customers
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium relative px-3 py-1.5 rounded-lg overflow-hidden"
      >
        <NavLink
          to={"/contact"}
          className="flex items-center z-10 text-xl duration-300"
          
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar
      ref={Nav}
      className="mx-auto rounded-none shadow-none py-2 px-0 lg:px-11 top-0 left-0 z-50 w-full transform duration-500"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-5xl"
        >
          Alexa
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="outlined" className="mr-3 hidden lg:inline-block">
            Log In
          </Button>
          <div className="hidden lg:block">
            <Badge content="5">
              <IconButton variant="text">
                <FaCartShopping className="text-3xl" />
              </IconButton>
            </Badge>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div>
            <Button variant="outlined" className="mr-3">
              Log In
            </Button>
            <Badge content="5">
              <IconButton variant="text">
                <FaCartShopping className="text-3xl" />
              </IconButton>
            </Badge>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Nav;
