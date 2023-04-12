import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center md:flex-row  md:justify-between md:items-center   py-6">
      <div className="">
        <Link to="/">
          <span className="text-3xl font-bold text-black ">
            Build Your Dream
          </span>
        </Link>
      </div>
      <div className=" flex md:flex-row flex-col gap-x-4	 text-xl text-slate-400 ">
        <Link to="/">Home</Link>
        <Link to="statistics">Statistics</Link>
        <Link to="applied-jobs">Applied Jobs</Link>
        <Link to="blog">Blog</Link>
      </div>

      <button className="primary-btn w-48 px-5 py-4 font-bold	rounded-lg text-xl text-white">
        Star Applying
      </button>
    </nav>
  );
};

export default Navbar;
