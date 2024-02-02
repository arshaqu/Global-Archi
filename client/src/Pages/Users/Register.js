import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false)

  const onFinish = async () => {
    const values = {
      name,
      email,
      phone,
      password,
    };
    console.log(values);
  };

  const show = async()=>{
    try {
      setShowPassword(!showPassword)
      const inputElement = document.getElementById('hide')
      inputElement.type = showPassword?'text':'password';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{}} className="authentication bg_img">
      <div className="register_form ">
        <svg
          style={{ marginLeft: "190px", color: "#40A2D8" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="mt-4 bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg>
        <h2 style={{ color: "#40A2D8" }} className="regis mt-1">
          USER REGISTER
        </h2>
        <form>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="fle mt-3"
          >
            <svg
              style={{ marginLeft: "45px", color: "#40A2D8" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <h6 style={{ color: "#40A2D8" }} className="names">
              Name{" "}
            </h6>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control inputs mt-1"
            placeholder="Enter Name..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="fle mt-3"
          >
            <svg
              style={{ marginLeft: "45px", color: "#40A2D8" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <h6 style={{ color: "#40A2D8" }} className="names mx-1">
              Email
            </h6>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control inputs mt-1"
            placeholder="Enter Email..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <div
            style={{ display: "flex", alignItems: "center" }}
            className="fle mt-3"
          >
            <svg
              style={{ marginLeft: "45px", color: "#40A2D8" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-phone-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
            </svg>
            <h6 style={{ color: "#40A2D8" }} className="names">
              Phone
            </h6>
          </div>
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control inputs mt-1"
            placeholder="Enter Phone..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <div
            style={{ display: "flex", alignItems: "center" }}
            className="fle mt-3"
          >
            <svg
              style={{ marginLeft: "45px", color: "#40A2D8" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <h6 style={{ color: "#40A2D8" }} className="names">
              Password
            </h6>
          </div>
          <input
            id='hide'
            value={password}
            type={showPassword?'text':'password'}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control inputs mt-1 mb-3"
            placeholder="Enter Password..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div>
                    <svg
                    onClick={show}
                    style={{
                      position: "absolute",
                      left: "333px",
                      top: "76%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                  </svg>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={onFinish}
              style={{
                width: "350px",
                marginLeft: "-72px",
                backgroundColor: "#40A2D8",
                color: "white",
                fontFamily: "serif",
                fontWeight: "",
              }}
              className="btn  "
              type="button"
            >
              Submit
            </button>
          </div>
          <div style={{ marginBottom: "18px" }}>
            <Link
              className="mb-2"
              style={{
                marginLeft: "40px",
                color: "#40A2D8",
                fontFamily: "cursive",
              }}
              to="/login"
            >
              Already an user
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
