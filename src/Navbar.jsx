"use client";
import React, { useEffect, useState } from "react";
import images from "../public/assets/images";
import { Link, useLocation } from "react-router-dom";
import { MdCircleNotifications } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import SearchBar from "./SearchBar";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  const checkIfActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfActive);
    return () => {
      window.removeEventListener("scroll", checkIfActive);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsOptionsDropdownOpen(true);
  };

  const toggleOptionsDropdown = () => {
    setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
  };

  return (
    <nav
      className={`navbar ${isOpen ? "is-active" : ""} ${
        isActive || pathname !== "/" ? "navbar active" : "navbar"
      }`}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" style={{ color: "#000" }} className="hyper_link">
            <h1>LOGO</h1>
          </Link>
        </div>
        <SearchBar />
        <div className="navbar-menu_sec">
          <div className="navbar-list_sec">
            <a href="/" className="navbar-item" style={{ color: "#000" }}>
              Settings
            </a>
            <Link
              to="/crypto"
              className="navbar-item"
              style={{ color: "#000" }}
            >
              Help
            </Link>
            <Link to="/findjobs" className="navbar-item">
              <MdCircleNotifications
                style={{ color: "#000" }}
                className="notify"
              />
              <div className="point_notification"></div>
            </Link>
            {/* <a href="/signin" className="navbar-item">
              Signin
            </a> */}
            <div className="user-sec">
              {/* <img
                src={images.userLogo}
                alt="user logo"
                className="user-logo"
              /> */}
              <LuUser2 />
              <span className="navbar-item" onClick={toggleUserDropdown}>
                {currentUser?.username}
              </span>
              <i className="fa-solid fa-chevron-down toggle-btn"></i>
            </div>
            {!currentUser?.isSeller && (
              <a href="/signup" className="navbar-item">
                <img
                  src={images.sellerIcon}
                  alt="icon of a seller"
                  className="seller-icon"
                />
                Become a seller
              </a>
            )}
            {!currentUser && (
              <a href="/about" className="navbar-item navbar-item_cta">
                Join
              </a>
            )}
            {/* {currentUser && (
              <div className="user">
                {isUserDropdownOpen && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <a href="/mygigs" className="link_for-small-icons">
                          <img
                            src={images.gigIcon}
                            alt="icon for messaging"
                            className="small__icons"
                          />
                          Gigs
                        </a>
                        <Link to="/add" className="link_for-small-icons">
                          <img
                            src={images.addNewGig}
                            alt="icon for messaging"
                            className="small__icons"
                          />
                          Add New Gigs
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="link_for-small-icons">
                      <img
                        src={images.logoutIcon}
                        alt="icon for messaging"
                        className="small__icons"
                      />
                      Orders
                    </Link>
                    <Link to="/messages" className="link_for-small-icons">
                      <img
                        src={images.messageIcon}
                        alt="icon for messaging"
                        className="small__icons"
                      />
                      Messages
                    </Link>
                    <Link to="/" className="link_for-small-icons">
                      <img
                        src={images.ordersIcon}
                        alt="icon for logout"
                        className="small__icons"
                      />
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )} */}
          </div>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <div className="">
            <div className="mobile-menu">
              <a href="/" className="navbar-item">
                Settings
              </a>
              <a href="/crypto" className="navbar-item">
                Help
              </a>
              <a href="/findjobs" className="navbar-item">
                <MdCircleNotifications
                  style={{ color: "#000" }}
                  className="notify"
                />
              </a>
              {/* <Link to="/signup" className="navbar-item special-link">
                <img
                  src={images.sellerIcon}
                  alt="icon of a seller"
                  className="seller-icon"
                />
                Become a seller
              </Link> */}
              <div className="user-sec user_sec">
                {/* <img
                  src={images.userLogo}
                  alt="user logo"
                  className="user-logo"
                /> */}
                <LuUser2 />
                <span className="navbar-item" onClick={toggleUserDropdown}>
                  {currentUser?.username}
                </span>
                {/* <i className="fa-chevron-down toggle-btn"></i> */}
                <i className="fa-solid fa-chevron-down toggle-btn"></i>
                {currentUser && (
                  <div className="user">
                    {isUserDropdownOpen && (
                      <div className="options">
                        {currentUser?.isSeller && (
                          <>
                            <Link to="/mygigs" className="link_for-small-icons">
                              <img
                                src={images.gigIcon}
                                alt="icon for messaging"
                                className="small__icons"
                              />
                              Gigs
                            </Link>
                            <Link to="/add" className="link_for-small-icons">
                              <img
                                src={images.addNewGig}
                                alt="icon for messaging"
                                className="small__icons"
                              />
                              Add New Gigs
                            </Link>
                          </>
                        )}
                        <Link to="/orders" className="link_for-small-icons">
                          <img
                            src={images.logoutIcon}
                            alt="icon for messaging"
                            className="small__icons"
                          />
                          Orders
                        </Link>
                        <Link to="/messages" className="link_for-small-icons">
                          <img
                            src={images.messageIcon}
                            alt="icon for messaging"
                            className="small__icons"
                          />
                          Messages
                        </Link>
                        <Link to="/" className="link_for-small-icons">
                          <img
                            src={images.ordersIcon}
                            alt="icon for logout"
                            className="small__icons"
                          />
                          Logout
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <a href="/signin" className="navbar-item_cta-mobile">
                Login
              </a>
            </div>
          </div>
        </div>
        <div
          className={`navbar-burger ${isOpen ? "is-active" : ""}`}
          onClick={toggleNavbar}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>
      </div>
      {/* {isActive && (
        <>
          <hr />
          <div className="menu">
            <div className="menu-wrapper">
              <Link href="/" className="navbar-item">
                Engineering & Law
              </Link>
              <Link href="/" className="navbar-item">
                Graphics & Design
              </Link>
              <Link href="/" className="navbar-item">
                Video & Animation
              </Link>
              <Link href="/" className="navbar-item">
                Writing & Translation
              </Link>
              <Link href="/" className="navbar-item">
                AI Services
              </Link>
              <Link href="/" className="navbar-item">
                Digital Marketing
              </Link>
              <Link href="/" className="navbar-item">
                Music & Fashion
              </Link>
              <Link href="/" className="navbar-item">
                Programming & Tech
              </Link>
            </div>
          </div>
        </>
      )} */}
    </nav>
  );
}

export default Navbar;
