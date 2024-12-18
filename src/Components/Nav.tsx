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

import { useSelector } from "react-redux";
import CraftDrawer from "./CraftDrawer";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const Nav = useRef();

  const Craft = useSelector((state) => state.craft);

  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [currentScroll, setCurrentScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = () => {
    console.log(prevScroll);
    console.log(currentScroll);

    if (window.scrollY > prevScroll) {
      Nav.current.classList.add("-translate-y-[100%]");
    } else if (window.scrollY < prevScroll) {
      Nav.current.classList.remove("-translate-y-[100%]");
    }
    setPrevScroll(currentScroll);
    setCurrentScroll(window.scrollY);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [currentScroll]);

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
    <>
      <Navbar
        ref={Nav}
        className="mx-auto fixed max-w-none rounded-none shadow-none py-2 px-5 md:px-11 top-0 left-0 z-50 w-full transform duration-500"
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
              {Craft.Products.length ? (
                <Badge content={Craft.Products.length}>
                  <IconButton variant="text" onClick={openDrawer}>
                    <FaCartShopping className="text-3xl" />
                  </IconButton>
                </Badge>
              ) : (
                <IconButton variant="text" onClick={openDrawer}>
                  <FaCartShopping className="text-3xl" />
                </IconButton>
              )}
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
              {Craft.Products.length ? (
                <Badge content={Craft.Products.length}>
                  <IconButton variant="text" onClick={openDrawer}>
                    <FaCartShopping className="text-3xl" />
                  </IconButton>
                </Badge>
              ) : (
                <IconButton variant="text" onClick={openDrawer}>
                  <FaCartShopping className="text-3xl" />
                </IconButton>
              )}
            </div>
          </div>
        </Collapse>
      </Navbar>
      <CraftDrawer closeDrawer={closeDrawer} open={open} Craft={Craft} />
    </>
  );
};

export default Nav;
