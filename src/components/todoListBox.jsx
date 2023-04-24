import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const todoListBox = ({ list, deleteList, changeEditable, changeCompleted }) => {
  return (
    <>
      <div id={list.id} className="flex text-lg text-white rounded-lg mx-1 sm:mx-6 my-4 bg-emerald-500 px-5 py-3 items-center justify-between">
        <h1 onClick={() => changeCompleted(list.id)} className={`${list.completed ? "text-red-500 font-semibold" : ""} cursor-pointer`}>
          {list.name}
        </h1>
        <div className="flex gap-4 cursor-pointer text-xl">
          <FontAwesomeIcon icon={faEdit} className=" hover:scale-110 transition-all duration-300 hover:text-emerald-800" onClick={() => changeEditable(list.id)} />
          <FontAwesomeIcon icon={faTrash} className=" hover:scale-110 transition-all duration-300 hover:text-emerald-800" onClick={() => deleteList(list.id)} />
        </div>
      </div>
    </>
  );
};

export default todoListBox;
