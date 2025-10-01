import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Avatar, Dropdown, NavbarCollapse } from "flowbite-react";
import { HiOutlineUser } from "react-icons/hi";
import { logout } from "../redux/feature/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGetUser } from "../redux/feature/user/UserSlice";
import UpdateProfile from "../page/popup/updateProfile.jsx";
import { isTokenValidAsync } from "../helper/AsyncTokenCheck.jsx";

export default function NavbarList() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responGetUser = useSelector(selectGetUser)
  const profile = responGetUser.avatar;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const [isScrolled, setIsScrolled] = useState(false);
  
  const changeNavBg = () => {
    setIsScrolled(window.scrollY > 50);
  };
  
  const getNavbarClasses = () => {
    if (isScrolled) {
      return {
        container: "bg-white/95 backdrop-blur-xl border-white/20 shadow-lg",
        text: "text-gray-800",
        logo: "brightness-100 contrast-125"
      };
    } else {
      return {
        container: "bg-gradient-to-r from-[#00214A]/90 via-[#002952]/85 to-[#001B3F]/90 backdrop-blur-xl border-white/10",
        text: "text-white",
        logo: "brightness-110"
      };
    }
  };
  
  const navClasses = getNavbarClasses();

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

  // Effect: check login & refresh token on mount
  useEffect(() => {
    const checkLogin = async () => {
      const valid = await isTokenValidAsync(dispatch);
      setIsLoggedIn(valid);

      if (!valid) {
        handleLogout();
      }
    };

    checkLogin();
  }, []);

  return (
    <div
      className={`w-full fixed z-50 transition-all duration-700 ease-out ${navClasses.container}`}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative px-[5%] py-2">
        <Navbar fluid rounded className="bg-transparent relative">
          <Navbar.Brand as={Link} to="/" className="group grow focus:outline-none">
            <div className="relative">
              <img 
                src={logo} 
                className={`h-[60px] transition-all duration-500 transform group-hover:scale-110 ${navClasses.logo}`} 
                alt="JobFinder Logo" 
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Navbar.Brand>

          <div className="flex md:order-2 items-center gap-6 list-none">
            <div className="flex items-center gap-6">
              {isLoggedIn ? (
                <>
                  <div className={`w-px h-6 bg-gradient-to-b from-transparent via-current to-transparent ${navClasses.text} opacity-30 max-lg:hidden`}></div>
                  <div className="relative group">
                    <Dropdown
                      arrowIcon={false}
                      inline
                      label={
                        <div className="relative">
                          {profile ? (
                            <img 
                              alt="User profile" 
                              src={profile} 
                              className="w-11 h-11 rounded-full border-2 border-white/20 shadow-lg hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-400/25" 
                            />
                          ) : (
                            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
                              <HiOutlineUser className="w-6 h-6 text-white" />
                            </div>
                          )}
                          {/* Online indicator */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                        </div>
                      }
                    >
                      <Dropdown.Header className="bg-gradient-to-r from-blue-50 to-cyan-50">
                        <span className="block text-sm font-semibold text-gray-800">{responGetUser?.username}</span>
                        <span className="block truncate text-sm text-gray-600 font-medium">
                          {responGetUser?.email}
                        </span>
                      </Dropdown.Header>
                      <Dropdown.Item 
                        as={Link} 
                        to={"/List-Save-Jobs"}
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                      >
                        💼 My saved jobs
                      </Dropdown.Item>
                      <Dropdown.Item 
                        onClick={handleOpenModal}
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                      >
                        ⚙️ Update Profile
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item 
                        onClick={handleLogout}
                        className="hover:bg-red-50 text-red-600 transition-all duration-200"
                      >
                        🚪 Sign out
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <div className={`w-px h-6 bg-gradient-to-b from-transparent via-current to-transparent ${navClasses.text} opacity-30 max-lg:hidden`}></div>
                  <Link
                    to="/Login"
                    className={`${navClasses.text} hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105 transform relative group focus:outline-none`}
                  >
                    Login
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                  <Link
                    to="/Sign-Up"
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-0"
                  >
                    <span className="relative z-10">Sign Up</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  </Link>
                </>
              )}
            </div>

            <Navbar.Toggle className={`${navClasses.text} hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-0`} />
          </div>
          
          <Navbar.Collapse className="pr-5">
            {navbarList.map((list, index) => {
              const isActive = list.active;
              return (
                <div key={index} className="relative group">
                  <Navbar.Link
                    className={`${navClasses.text} hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-105 transform relative focus:outline-none focus:ring-0 ${
                      isActive ? 'text-cyan-400' : ''
                    }`}
                    as={Link}
                    to={list.url}
                    active={false} // Disable default active styling
                    onClick={() => handleClick(list)}
                  >
                    {list.title}
                  </Navbar.Link>
                  {/* Active indicator */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}></div>
                  {/* Hover underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                </div>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
      </div>
      
      {/* Bottom subtle shadow/glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <UpdateProfile
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
