import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
  }

  function handleRemove(listItem) {
    const removedList = list.filter((item) => item !== listItem);
    setList(removedList);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>

      {list.map((listItem, i) => (
        <div key={i}>
          <span>{listItem}</span>
          <button onClick={() => handleRemove(listItem)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default App;
