import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import axios from "axios";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClickHandler = (e) => {

    e.preventDefault();
    // const url = "http://0.0.0.0:8000/api/users/login/";
    const url = "https://bb10-122-168-137-85.ngrok-free.app/api/users/login/";

    console.log("userDate",email,password)
    axios
    .get(url, {
      email,password
    })
    .then(function (response) {
      // handle success
      console.log("task management detail", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 d-flex justify-content-center mt-5">
          <img
            src="https://smarthr.dreamstechnologies.com/html/template/assets/img/logo2.png"
            alt=""
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <Form
            style={{
              border: "2px solid white",
              padding: "50px 70px",
              "border-radius": "8px",
              "align-item": "center",
            }}
            className="login-form"
          >
            <div className="login-header mb-3">
              <h3 className="text-center">Login</h3>
              <h5 className="text-center text-gray">Access to our Dashboard</h5>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lable">Email address</Form.Label>
              <Form.Control type="email"  value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lable">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" onClick={loginClickHandler}>
              {/* <Link
                to="/"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Submit
              </Link> */}Login
            </Button>
          </Form>

          <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                <hr />
              </span>{" "}
              <Link
                to="/"
                style={{ "text-decoration": "none", color: "green" }}
              >
                <h5>Login with Google</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
