import { useState } from "react";
import MyNavbar from "../../compounents/navbar/Navbar";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const clickHandler = () => {
    if (username == "masoma" && password == "12345") {
      document.cookie =
        "username=masoma; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";
      redirect("/panel");
    } else {
      Swal.fire({
        title: "Error!",
        text: "یوزرنیم یا پسورد اشتباه است",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="login">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
        />
        <input onClick={clickHandler} type="button" value="Sign In" />
      </div>
      <div className="shadow"></div>
    </>
  );
}

export default Login;
