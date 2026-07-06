import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>

      <h2>CloudOps Portal</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/devices" style={styles.link}>Devices</Link>
      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#0f172a",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;