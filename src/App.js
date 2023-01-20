import { Register } from "./pages/Register/Register";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Todo } from "./pages/Todo/Todo";
import { tokenAction } from "./redux/token/tokenAction";

import { Login } from "./pages/Login/Login";
import { userAction } from "./redux/user/userAction";

function App() {
  const token = useSelector((state) => state.token.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenAction("token", localStorage.getItem("token")));
    dispatch(userAction("user", JSON.parse(localStorage.getItem("user"))));
  }, []);

  if (token) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }
}

export default App;
