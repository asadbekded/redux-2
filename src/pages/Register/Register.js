import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { tokenAction } from "../../redux/token/tokenAction";
import { userAction } from "../../redux/user/userAction";

export const Register = () => {
  const first = useRef();
  const last = useRef();
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch()

  const handleForm = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        first_name: first.current.value,
        last_name: last.current.value,
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        if(res.status === 201){
            console.log(res);
            window.localStorage.setItem('token', res.data.accessToken)
            dispatch(tokenAction(res.data.accessToken))
            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch(userAction(res.data.user))
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "400px", margin: "10% auto" }}>
      <h3>Register</h3>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <input
            ref={first}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="mb-3">
          <input
            ref={last}
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-3">
          <input
            ref={email}
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            ref={password}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
