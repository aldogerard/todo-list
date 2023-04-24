import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EditTodoForm = ({ list, editList }) => {
  const [value, setValue] = useState(list.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") return alert("Please Input The list !!!");

    editList(list.id, value);

    setValue("");
  };

  return (
    <>
      <form action="edit-list" onSubmit={handleSubmit}>
        <div className="flex justify-center my-4">
          <div className="flex items-center rounded-lg overflow-hidden border border-emerald-500   justify-between w-full mx-1 sm:mx-6">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="insert a new todo" className="px-5 py-[11px] text-lg w-5/6 focus:outline-none bg-transparent text-white border-r border-emerald-500" />
            <FontAwesomeIcon onClick={handleSubmit} icon={faCheck} className="flex cursor-pointer text-white hover:scale-110 transition-all duration-300 w-1/6 text-xl hover:text-emerald-500 " />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditTodoForm;
