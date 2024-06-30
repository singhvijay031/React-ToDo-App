import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";

const ToDo = ({ item, updateToDo, toggleDoneToDo, deleteToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleSave = () => {
    updateToDo(item._id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo ${item.done ? "done" : ""}`}>
      <input type="checkbox" checked={item.done} onChange={toggleDoneToDo} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          onKeyPress={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{item.text}</span>
      )}
      <div className="icons">
        {isEditing ? (
          <AiOutlineSave className="save" onClick={handleSave} />
        ) : (
          <BiEdit className="edit" onClick={() => setIsEditing(true)} />
        )}
        <AiFillDelete className="delete" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
