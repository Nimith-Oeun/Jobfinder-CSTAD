import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

export default function NavbarList() {
  const [navbarList, setNavbarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Jobs",
      url: "/Jobs",
      active: false,
    },
    {
      title: "Contact Us",
      url: "/Contact-Us",
      active: false,
    },
    {
      title: "|",
    },
    {
      title: "Login",
      url: "/Login",
      active: false,
    },
    {
      title: "sign Up",
      url: "/Sign-Up",
      active: false,
    },
  ]);

  const handleClick = (list) => {
    setNavbarList((preValue) => {
      return preValue.map((item) => {
        if (item.title === list.title) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
    });
  };
  return (
    <div className="w-full fixed z-20 inline-block px-[5%] bg-[#00214A] border-b border-gray-600 ">
      <Navbar fluid rounded className="bg-[#00214A]">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="h-[60px]"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
        {navbarList.map((list, index) => {
                        return (
                            <Navbar.Link
                                className="text-white"
                                key={index}
                                as={Link}
                                to={list.url}
                                active={list.active}
                                onClick={() => handleClick(list)}
                            >
                                {list.title}
                            </Navbar.Link>
                        );
                    })}
                    
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
