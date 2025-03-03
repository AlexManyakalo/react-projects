import styles from "./ToDoItem.module.scss";

function ToDoItem(props) {
  const { id, text, deleteTask } = props;

  return (
    <>
      <li className={styles.todo__item}>
        <p className={styles["todo__item-paragraph"]}>
          {id}. {text}
        </p>
        <button className="todo__item-btn" onClick={() => deleteTask(id)}>
          X
        </button>
      </li>
    </>
  );
}

export default ToDoItem;
