import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      padding: "15px",
      background: "#0B3D91",
      display: "flex",
      gap: "20px",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Report Issue</Link>
      <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>View Reports</Link>
    </nav>
  );
};

export default Navbar;