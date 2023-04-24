import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitForm = (e) => {
    if (input === "") return;

    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 100) + 1,
      name: input,
    };
    setList((state) => [...state, newList]);
    setInput("");
  };

  const handlerRemove = (id) => {
    const newList = list.filter((li) => li.id !== id);
    setList(newList);
  };

  const data = () => {
    if (list.length === 0) return <h1>kosong</h1>;

    return list.map((res, i) => (
      <div className="border justify-between flex w-full max-w-xs my-2 px-3">
        <h1 className="my-2">{res.name}</h1>
        <button type="button" onClick={() => handlerRemove(res.id)}>
          ❌
        </button>
      </div>
    ));
  };

  return (
    <div className="container flex-col flex justify-center items-center ">
      <form action="todo-list" onSubmit={submitForm}>
        <input type="text" value={input} onChange={(e) => handleChange(e)} placeholder="Masukkan Todo List" className="border m-4" />
        <button type="submit" className="border bg-blue-700">
          Input
        </button>
      </form>
      {data()}
    </div>
  );
};

export default App;
