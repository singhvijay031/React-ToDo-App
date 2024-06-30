import "../App.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDO = ({ text, updateToDo, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="edit" onClick={updateToDo} />
        <AiFillDelete className="delete" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDO;
