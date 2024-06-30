import "./App.css";
import ToDO from "./components/ToDO";

function App() {
  return (
    <div className="container">
      <h1>ToDo App</h1>
      <div className="top">
        <input type="text" placeholder="Add ToDos..." />

        <div className="add">Add</div>
      </div>
      <div className="list">
        <ToDO text="Hello" />
        <ToDO text="Hello" />
        <ToDO text="Hello" />
      </div>
    </div>
  );
}

export default App;
