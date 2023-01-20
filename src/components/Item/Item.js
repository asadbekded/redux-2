import axios from "axios";
import React, { useState } from "react";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

export const Item = ({ id, user }) => {
    const [ inp, setInp ] = useState(false);

  const handleDeleteTodo = async (id) => {
    axios.delete('http://localhost:8080/todos/' + id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  const handleEditTodo = async (id) => {
    const name = prompt('Todo qoshing', user)
    console.log(name);
    axios
      .put('http://localhost:8080/todos/' + id, {
        user_todo: name,
        isComplete: false
      })
      .then((res) => {
        if(res.status === 200) {
            window.location.reload()
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <li className="d-flex mb-3 p-3 rounded shadow-sm align-items-center">
        <input onClick={() => setInp(!inp)} className="form-check-input" type="checkbox"/>
        <p className={inp ? "m-0 ms-3 text-danger text-decoration-line-through" : 'm-0 ms-3'}>{user}</p>
        <div className="ms-auto">
          <button onClick={() => handleEditTodo(id)} className="btn">
            <img src={Edit} alt="delete img" width="20" height="20" />
          </button>
          <button onClick={() => handleDeleteTodo(id)} className="ms-2 btn">
            <img src={Delete} alt="delete img" width="20" height="20" />
          </button>
        </div>
      </li>
    </>
  );
};
