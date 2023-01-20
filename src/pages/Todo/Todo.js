import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoAction,
  todoErrorAction,
  todoGetAction,
} from "../../redux/todo/todoAction";
import { removeToken } from "../../redux/token/tokenAction";
import { removeUser } from "../../redux/user/userAction";
import { Item } from "../../components/Item/Item";
import Loug from "../../assets/images/door.png";

export const Todo = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const user = useSelector((state) => state.todo);

  const handleRemove = () => {
    dispatch(removeToken(localStorage.removeItem("token")));
    dispatch(removeUser(JSON.parse(localStorage.removeItem("user"))));
  };

  const handleTodo = () => {
    axios
      .post("http://localhost:8080/todos", {
        user_todo: todoRef.current.value,
        isComplete: false,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dispatch(todoAction());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          dispatch(todoGetAction(res.data));
        }
      })
      .catch((err) => dispatch(todoErrorAction("ERROR")));
  }, [dispatch]);

  return (
    <div>
      <div className="w-50 mx-auto shadow p-3 mt-3">
        <div className=" mb-4 d-flex align-items-center">
        <h3 className="">Todo</h3>
        <button onClick={handleRemove} className="btn ms-auto">
          <img src={Loug} alt="delete img" width="30" height="30" />
        </button>
        </div>
        <div className="d-flex">
          <input
            ref={todoRef}
            className="form-control"
            type="text"
            placeholder="Write Todo"
          />
          <button
            onClick={handleTodo}
            type="submit"
            className="btn btn-primary"
          >
            Send
          </button>
        </div>
        <ul className="p-0 list-unstyled mt-4">
          {user.data.map((el) => (
            <Item key={el.id} id={el.id} user={el.user_todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
