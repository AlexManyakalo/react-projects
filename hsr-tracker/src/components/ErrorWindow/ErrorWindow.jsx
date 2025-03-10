import { useEffect } from "react";
import styles from "./ErrorWindow.module.scss";

function ErrorWindow(props) {
  const { errorMessage, setErrorMessage, setIsLoading } = props;

  useEffect(() => {
    if (errorMessage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [errorMessage]);

  return (
    <>
      <div className={styles.popup} onClick={() => setErrorMessage("")}></div>
      <section className={styles.error}>
        <h2 className={styles.error__title}>Ошибка</h2>
        <p className={styles.error__paragraph}>{errorMessage}</p>
        <button
          className={styles.error__btn}
          onClick={() => {
            setErrorMessage("");
            setIsLoading(false);
          }}
        >
          Ок
        </button>
      </section>
    </>
  );
}

export default ErrorWindow;
