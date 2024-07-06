import axios from "axios";

const baseUrl = "https://todo-dsdcqu9ey-bijay-mahatos-projects.vercel.app/";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    // console.log("data---->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

const updateToDo = (id, text, setToDo) => {
  axios.post(`${baseUrl}/update`, { _id: id, text }).then(() => {
    getAllToDo(setToDo);
  });
};

const deleteToDo = (id, setToDo) => {
  axios.post(`${baseUrl}/delete`, { _id: id }).then(() => {
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
