import styles from "./Form.module.scss";

function Form(props) {
  const { uid, setUid, handleSubmit } = props;

  return (
    <section className={styles.data}>
      <p className={styles.data__text}>Для примера введите: 700474067</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className={styles.data__form}
      >
        <input
          type="text"
          value={uid}
          onChange={e => setUid(e.target.value)}
          placeholder="Введите UID"
        />
        <button type="submit">Найти</button>
      </form>
    </section>
  );
}

export default Form;
