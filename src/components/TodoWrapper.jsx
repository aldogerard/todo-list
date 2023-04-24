import { useState, useEffect } from "react";
import TodoForm from "./todoForm";
import TodoListBox from "./todoListBox";
import EditTodoForm from "./editTodoForm";
import uuid from "react-uuid";

const TodoWrapper = () => {
  const [list, setList] = useState([]);

  const addList = (value) => {
    if (list.length >= 5) return alert("Your list is full !!!");

    const newList = [
      ...list,
      {
        id: uuid(),
        name: value,
        editable: false,
        completed: false,
      },
    ];

    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(savedList);
  }, []);

  const deleteList = (id) => {
    const newList = list.filter((li) => li.id !== id);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const editList = (id, value) => {
    const newList = list.map((li) => (li.id === id ? { ...li, editable: !li.editable, name: value } : li));
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const changeEditable = (id) => {
    const newList = list.map((li) => (li.id === id ? { ...li, editable: !li.editable } : li));
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const changeCompleted = (id) => {
    const newList = list.map((li) => (li.id === id ? { ...li, completed: !li.completed } : li));
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700">
      <div className="container  max-w-5xl flex justify-center mx-auto">
        <div className="bg-emerald-950 w-full max-w-[500px] shadow-2xl shadow-emerald-900 p-4 py-6 my-10 rounded-lg mx-2 sm:mx-0">
          <h1 className="text-4xl text-white font-bold text-center pb-4">Add Your List </h1>
          {list.length >= 5 ? <h1 className={`text-rose-500 text-sm  ml-6 ${list.length >= 5 ? "" : "hidden"}`}>*Your list is full</h1> : <TodoForm addList={addList} />}
          {list.map((li) => (!li.editable ? <TodoListBox list={li} deleteList={deleteList} changeEditable={changeEditable} changeCompleted={changeCompleted} /> : <EditTodoForm list={li} editList={editList} />))}
        </div>
      </div>
    </section>
  );
};

export default TodoWrapper;
