import React, { useState } from "react";

const TodoForm = ({ addList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      return alert("Please input the list !!!");
    }

    addList(value);

    setValue("");
  };

  return (
    <>
      <form action="submit-todo" onSubmit={handleSubmit}>
        <div className="flex justify-center py-2 pb-6">
          <div className="flex items-center rounded-lg overflow-hidden border border-emerald-500  justify-center w-full mx-1 sm:mx-6">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Create a new list" className="px-5 py-2 text-md w-3/4 focus:outline-none bg-transparent text-white" />
            <button className="bg-emerald-500 h-full font-semibold w-1/4 text-white disabled:bg-emerald-600 ">Add List</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
