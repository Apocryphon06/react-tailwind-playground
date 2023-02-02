import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import closeButton from "../assets/icons/closeButton.svg";


function Todo() {
  const [todo, setTodo] = useState(["Add a task"]);
  const [name, setName] = useState("");

  const RemoveItem = (index) => {
    // console.log('index:', index)
    let list = [...todo];
    if (index !== -1) {
      list.splice(index, 1);
    }
    setTodo(list);
    showToastMessage("Task Deleted Successfully");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const AddTodo = () => {
    if (!name) {
      // alert("Enter a valid task!");
      errorToastMessage("Enter a task");
      return;
    }
    setTodo([...todo, name]);
    setName("");
    showToastMessage("Task Added");
  };


  const showToastMessage = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errorToastMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const deleteToastMessage = (message) => {
  //   toast.error(message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  // };

  return (
    <div className=" flex flex-col justify-center items-center m-5">
      <div className="border rounded-lg p-3 lg:w-1/3 w-full">
        <h3 className="flex justify-center items-center text-2xl">Todo</h3>
        <br />
        <div className="grid grid-flow-col grid-2 gap-2">
          <input
            type="text"
            name="task"
            value={name}
            onChange={handleChange}
            className="border text-sm p-2 rounded-sm w-full"
            placeholder="type something..."
          />
          <button onClick={AddTodo} className="p-2 bg-[#4CAF50] rounded-sm">
            Add
          </button>
        </div>
      </div>

      <div className="rounded-md lg:w-1/3 w-full overscroll-auto">
        {todo.map((item) => (
          <div className="flex flex-row justify-between items-center border rounded-lg my-2">
            <li className="p-2 m-2 text-md ">{item}</li>
            <img
              onClick={RemoveItem}
              className="mx-3 cursor-pointer hover:bg-[#ed5b51] rounded-lg p-1"
              src={closeButton}
              alt={closeButton}
            />
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Todo;
