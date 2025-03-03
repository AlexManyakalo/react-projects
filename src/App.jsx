import { useState } from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem.jsx";
import ToDoForm from "./components/ToDoForm/ToDoForm.jsx";
import styles from "./App.module.scss";

function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "rgergerger",
    },
    {
      id: 2,
      text: "thrthrt",
    },
    {
      id: 3,
      text: "wrttjetyj",
    },
  ]);

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleAddTask() {
    if (newTaskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: newTaskText,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  return (
    <>
      <div className={`${styles.todo} container`}>
        <h1 className="todo__title todo__title--big">ToDoList</h1>
        <ToDoForm
          newTaskText={newTaskText}
          addTask={handleAddTask}
          setNewTaskText={setNewTaskText}
        />
        <div className="todo__form">
          <h2 className="todo__title">Tasks</h2>
          <ul className={styles.todo__list}>
            {tasks.map(task => (
              <ToDoItem
                key={task.id}
                id={task.id}
                text={task.text}
                deleteTask={handleDeleteTask}
              ></ToDoItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
