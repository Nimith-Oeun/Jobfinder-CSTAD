import React, { useState, useEffect } from "react";
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
      title: "Sign Up",
      url: "/Sign-Up",
      active: false,
    },
  ]);

  const [bgColor, setBgColor] = useState('bg-[#00214A]');
  const [textColor, setTextColor] = useState('text-white');
  const [borderColor, setBorderColor] = useState('border-gray-600');

  const changeNavBg = () => {
    if (window.scrollY > 50) {
      setBgColor('bg-white');
      setTextColor('text-black');
      setBorderColor('border-gray-100');
    } else {
      setBgColor('bg-[#00214A]');
      setTextColor('text-white');
      setBorderColor('border-gray-600');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

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
    <div className={`w-full fixed z-20 inline-block px-[5%] border-b ${borderColor} shadow-sm transition-colors duration-300 ${bgColor}`}>
      <Navbar fluid rounded className="bg-transparent">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="h-[60px]"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navbarList.map((list, index) => {
            return (
              <Navbar.Link
                className={textColor}
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