import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold text-black ">
            Build Your Dream
          </span>
        </Link>
      </div>
      <div className=" flex gap-x-4	 text-xl text-slate-400 ">
        <Link to="/">Home</Link>
        <Link to="statistics">Statistics</Link>
        <Link to="applied-jobs">Applied Jobs</Link>
        <Link to="blog">Blog</Link>
      </div>

      <button className="primary-btn w-48 px-7 py-5 font-bold	rounded-lg text-xl text-white">
        Star Applying
      </button>
    </nav>
  );
};

export default Navbar;
