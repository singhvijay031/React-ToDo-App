import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDO";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  toggleDoneToDo,
  deleteToDo,
} from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleAdd = () => {
    if (text.trim()) {
      addToDo(text, setText, setToDo);
    }
  };

  const handleUpdate = (id, newText) => {
    if (newText.trim()) {
      updateToDo(id, newText, setToDo);
    }
  };

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <div className="top">
        <input
          type="text"
          placeholder="Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={handleAdd}>
          Add
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            item={item}
            updateToDo={handleUpdate}
            toggleDoneToDo={() => toggleDoneToDo(item._id, setToDo)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
