import styles from "./ToDoForm.module.scss";

function ToDoForm(props) {
  const { newTaskText, addTask, setNewTaskText } = props;

  return (
    <>
      <div className="todo__form">
        <h2 className="form__title">Add task</h2>
        <div className={styles.form__controls}>
          <input
            type="text"
            className="form__controls-input"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
          />
          <button className="form__controls-btn" onClick={() => addTask()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoForm;
