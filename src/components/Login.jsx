import React, { useState } from "react";
import "../Login.css";

function Login() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  return (
    <div className="login-container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" />
        <input name="lName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
