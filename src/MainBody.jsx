import React from "react";
import "./MainBody.css";
import { FaChevronDown, FaCircleCheck, FaCircleUser } from "react-icons/fa6";
import { FaIdCardClip } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import SearchBarProfile from "./SearchBarProfile";
import { FaCheck, FaSignOutAlt } from "react-icons/fa";

const MainBody = () => {
  return (
    <div className="main_body_wrapper">
      <div className="middle-point">
        <div className="first-col">
          <div className="profile_header">
            <div className="profile">
              <div className="user-id">
                <FaCircleUser className="user_icon" />
                <h3>Hello, Name</h3>
              </div>
            </div>
            <div className="id-label">
              <FaIdCardClip
                className="contact_icon"
                style={{ fontSize: "19px" }}
              />
              <p style={{ fontSize: "13px" }}>+X XXX XXX XXXX</p>
            </div>
          </div>
          <div className="profile-links">
            <div className="analytics-wrapper">
              <h2 className="header_text">Analytics</h2>
              <div className="analytics-list">
                <p>Overview</p>
                <p>Payments</p>
                <p>Activity Feed</p>
                <p>Ratings & Reviews</p>
              </div>
            </div>
            <div className="analytics-wrapper">
              <h2 className="header_text">Product Catalogue</h2>
              <div className="analytics-list">
                <p>List of Products</p>
                <p>Upload a Product</p>
              </div>
            </div>
            <div className="analytics-wrapper">
              <h2 className="header_text">Order Management</h2>
              <div className="analytics-list">
                <p>Order List</p>
                <p>Returns & Refunds</p>
                <p>Disputes</p>
              </div>
            </div>
            <a href="/signout" className="hyper_link">
              <div className="sign_out">
                <p>Signout</p>
                <span>
                  <FaSignOutAlt />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="second-col">
          <div className="top-col_wrapper_container">
            <div className="top-col_wrapper">
              <h2 className="main-top-bar">
                Help{" "}
                <span>
                  <IoIosArrowForward />
                </span>
                <p className="faq">Frequently Asked Questions</p>
              </h2>
            </div>
            <h1 className="page_title">Seller's Online Help Services</h1>
            <div className="help_hero_wrapper">
              <h2>Need help? Let us help you!</h2>

              <h4>Give us a call: 1-800-123-4567</h4>
              <p>Email us: myshopping@shopping.com</p>
              <p>Monday - Friday 6am - 5pm PST</p>
              <p>Saturday - Sunday 8am - 2pm PST</p>
            </div>
            <div className="search_container_wrapper">
              <SearchBarProfile />
            </div>
            <h1 className="page_title">Popular Topics</h1>
            <div className="faq_questions_section">
              <div className="faq_section_wrap-one">
                <div className="faq-wrapper">
                  <div className="faq-list">
                    <div className="faq_wrapper_questions">
                      <p>Frequently asked for Account</p>
                      <FaChevronDown />
                    </div>
                    <div className="faq_wrapper_questions">
                      <p>Payments & Refund</p>
                      <FaChevronDown />
                    </div>
                    <div className="faq_wrapper_questions">
                      <p>Orders, Shipping & Tracking</p>
                      <FaChevronDown />
                    </div>
                    <div className="faq_wrapper_questions">
                      <p>Returns & Exchange</p>
                      <FaChevronDown />
                    </div>
                    <div className="faq_wrapper_questions">
                      <p>Products</p>
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq_section_wrap-two">
                <h1 className="header_text">Select Question</h1>
                <div className="analytics-list_question">
                  <p>
                    Question 1{" "}
                    <span style={{ marginLeft: "13px" }}>
                      <FaCircleCheck />
                    </span>
                  </p>
                  <p>Question 2</p>
                  <p>Question 3</p>
                  <p>Question 4</p>
                  <p>Question 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
