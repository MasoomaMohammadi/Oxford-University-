import { useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../utils";

function MyNavbar() {
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "خروج" : "ورود");
  const logoutHandler = () => {
    document.cookie =
      "username=masoma; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/;";
    setLoginStatus("خروج");
  };
  const expand = "md";
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#9194fc" }}
        key={expand}
        expand={expand}
        className="mb-3"
      >
        <Container>
          <Navbar.Brand
            style={{ fontFamily: "Lalezar", fontSize: "28px" }}
            href="#"
          >
            دانشکاه آکسفورد
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                دانشکاه آکسفورد
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="nav-link">
                  صفحه اصلی
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  دانشکده ها
                </NavLink>
                <NavLink to="/article" className="nav-link">
                  مقالات
                </NavLink>
                <NavLink to="/panel" className="nav-link">
                  پنل
                </NavLink>
                {isLogin() ? (
                  <NavLink
                    onClick={logoutHandler}
                    to="/login"
                    className="nav-link"
                  >
                    {loginStatus}
                  </NavLink>
                ) : (
                  <NavLink to="/login" className="nav-link">
                    {loginStatus}
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
