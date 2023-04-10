import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="statistics">Statistics</Link>
      <Link to="applied-jobs">Applied Jobs</Link>
      <Link to="blog">Blog</Link>
    </nav>
  );
};

export default Navbar;
