import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState("");

  const [input, setInput] = useState(initialState);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    axios
      .post(`https://crudmongo-backend.herokuapp.com/login`, input)
      .then((response) => {
        alert("sucess");
        setInput(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        body{\n            background-color:rgb(147, 50, 253);\n        }\n\n      .form-control{\n           \n           border-radius: 15px;\n          \n        }\n        form h1{\n           color: black;\n           text-align: center;\n        }\n        .form-div{\n            color: black\n        }\n        .container{\n            height: 500px;\n            width: 704px;\n            background-color:aliceblue;\n            border-radius: 15px;\n        }\n\n    ",
          }}
        />
        <div className="container">
          <div
            style={{ width: "500px", marginLeft: "90px", marginTop: "90px" }}
          >
            <h1>Sign up</h1>
            <div id="container" className="mb-3">
              <div>Name</div>
              <input
                className="form-control"
                type={"text"}
                name={"name"}
                value={input.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="mb-3">
              <div className="form-div">Email address</div>
              <input
                className="form-control"
                type={"text"}
                name={"email"}
                value={input.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="mb-3">
              <div className="form-div">Password</div>
              <input
                className="form-control"
                type={"password"}
                name={"password"}
                value={input.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <div className="form-check-div">Remember me</div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
