import { useState } from "react";
function Login({ setPage, setUser }) {
const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function login() {
  let users =JSON.parse(localStorage.getItem("users")) || [];

    // check if username exists
    let userFound =users.find(u => u.name === name);
    if (!userFound) {
      alert("Please register first");
      return;
    }

    // check password
    if (userFound.pass
      !== pass) {
      alert("Wrong password");
      return;
    }

    // success
    setUser(name);
    setPage("form");
  }
    function register() {
    if (name === "" || pass === "") {
      alert("Enter Username and Password");
      return;
    }
    let users =JSON.parse(localStorage.getItem("users")) || [];

    // check already registered
    let already =users.find(u => u.name === name);
    if (already) {
      alert("User already registered");
      return;
    }
    users.push({ name, pass });
    localStorage.setItem("users",JSON.stringify(users) );
    alert("Registered Successfully");
  }

  return (
    
    <div className="login-page"> 
    <div className="box1">
    <h2>Dream Travel Wishlist Login</h2>
    <input placeholder="Username"onChange={(e) => setName(e.target.value)}/>
    <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
    <br/>
    <button className="login-btn" onClick={login}>Login</button>
    <button className="login-btn"   onClick={register}> Register</button>
    <br />
    <button className="login-btn1"  onClick={() => alert("Password Missing")}>Forgot Password</button>
    </div>
    </div>
  );
}

export default Login;