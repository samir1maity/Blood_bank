import React from "react";
import { MdBloodtype } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    // alert("Logout Successfully");
    toast.success('Logout Successfully')
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <MdBloodtype color='red' style={{ fontSize: "3rem" }} />
            <span style={{ fontWeight: "bold" }}>BLOOD BANK</span>
          </div>

          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3 pt-1">
              <p className="nav-link">
                <FaUserCircle color='Yellow' style={{ fontSize: "2rem" }} /> Welcome{" "}
                <span style={{ fontWeight: "bold" }}>
                  ( {user?.name || user?.hospitalName || user?.organisationName} )
                </span> &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>

            {location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname==="/admin" ||
              location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  <span className="btn btn-success" style={{ fontWeight: 'bold' }}>ANALYTICS</span>
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                <span className="btn btn-warning" style={{ fontWeight: 'bold' }}>HOME</span>
                </Link>
              </li>
            )}

            <li className="nav-item mx-3 pt-2">
              <button className="btn btn-danger" onClick={handleLogout}>
                <span style={{ fontWeight: 'bold' }}>LOGOUT</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
