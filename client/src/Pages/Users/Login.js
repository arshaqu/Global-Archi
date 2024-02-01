import React, { useState } from "react";
import "./Register.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const show = () => {
    setShowPassword(!showPassword);
    const inputElement = document.getElementById("hide");
    inputElement.type = showPassword ? "password" : "text";
  };

  const onFinish = async () => {
    try {
      const values = {
        email,
        password,
      };
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{}} className="authentication bg_img">
        <div style={{ width: "430px" }} className="register_form ">
          <div style={{ display: "flex" }} className="">
            <svg
              style={{ marginLeft: "10px",color:'#40A2D8' }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mt-3 bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
            <svg
              style={{ marginLeft: "380px",color:'#40A2D8' }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mt-3 bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
          <h2 style={{color:"#40A2D8"}} className="regis mt-1">USER LOGIN</h2>
          <form>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="fle mt-3"
            >
              <svg
                style={{ marginLeft: "45px" ,color:'#40A2D8'}}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                type="text"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <h6 style={{color:'#40A2D8'}} className="names mx-1">Email</h6>
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
              className="fle mt-4"
            >
              <svg
                style={{ marginLeft: "45px",color:'#40A2D8' }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
              </svg>
              <h6 style={{color:'#40A2D8'}} className="names">Password</h6>
            </div>

            <div>
              <div>
                <input
                  id="hide"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control inputs mt-1 mb-4"
                  placeholder="Enter Password..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <div>
                  <svg
                    onClick={show}
                    style={{
                      position: "absolute",
                      left: "358px",
                      top: "58%",
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
              </div>
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
                className="btn  mb-3"
                type="button"
              >
                Submit
              </button>
              </div>
              <div style={{display:'flex' ,marginTop:'-5px'}}>
                  <p style={{cursor:'pointer' ,color:'#40A2D8',fontFamily:"cursive",marginLeft:'40px'}} className="" >New User..?</p>
                  <p style={{cursor:'pointer' ,color:'#40A2D8',fontFamily:"cursive",marginLeft:'120px'}} className="mt-1" >Forget Password..?</p>

              </div>

              <div style={{ display: "flex" }} className="">
                <svg
                  style={{ marginLeft: "12px" ,color:"#40A2D8"}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mb-2 bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
                <svg
                  style={{ marginLeft: "375px",color:"#40A2D8" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mb-2 bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
