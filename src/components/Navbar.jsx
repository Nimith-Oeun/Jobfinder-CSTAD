import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Avatar, Dropdown, NavbarCollapse } from "flowbite-react";
import { HiOutlineUser } from "react-icons/hi";
import { getAccessToken } from "../lib/securLocalStorage";
import { logout } from "../redux/feature/user/UserSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGetUser } from "../redux/feature/user/UserSlice";
import UpdateProfile from "../page/popup/updateProfile.jsx";

export default function NavbarList() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responGetUser = useSelector(selectGetUser)
  console.log("responGetUser", responGetUser.avatar);
  const profile = responGetUser.avatar;
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
  ]);

  const [bgColor, setBgColor] = useState("bg-[#00214A]");
  const [textColor, setTextColor] = useState("text-white");
  const [borderColor, setBorderColor] = useState("border-gray-600");
  const changeNavBg = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-white");
      setTextColor("text-black");
      setBorderColor("border-gray-100");
    } else {
      setBgColor("bg-[#00214A]");
      setTextColor("text-white");
      setBorderColor("border-gray-600");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.activeItem) {
      setNavbarList((preValue) => {
        return preValue.map((item) => {
          if (item.title === location.state.activeItem) {
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
    }
  }, [location.state]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className={`w-full fixed z-20 inline-block px-[5%] border-b ${borderColor} shadow-md transition-colors duration-300 ${bgColor}`}
    >
      <Navbar fluid rounded className="bg-transparent">
        <Navbar.Brand as={Link} to="/" className="grow">
          <img src={logo} className="h-[60px]" alt="Flowbite React Logo" />
        </Navbar.Brand>

        <div className="flex md:order-2 items-center gap-5 list-none">
          <div className="flex items-center gap-5">
            {getAccessToken() ? (
              <>
              <p className={`${textColor} max-lg:hidden`}>|</p>
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" src={profile} rounded />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{responGetUser?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {responGetUser?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item as={Link} to={"/List-Save-Jobs"}>My save jobs</Dropdown.Item>
                <Dropdown.Item onClick={handleOpenModal}>Update Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>
              </>
            ) : (
              <>
                <p className={`${textColor} max-lg:hidden`}>|</p>
                <Navbar.Link as={Link} to="/Login" className={textColor}>
                  Login
                </Navbar.Link>
                <Navbar.Link as={Link} to="/Sign-Up" className={textColor}>
                  Sign Up
                </Navbar.Link>
              </>
            )}
          </div>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="pr-5">
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
      <UpdateProfile 
        isModalOpen={isModalOpen} 
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
