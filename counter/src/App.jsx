import { useState } from "react";
import Button from "./components/Button/Button.jsx";
import Counter from "./components/Counter/Counter.jsx";
import styles from "./App.module.scss";

function App() {
  const charPlus = "+";
  const charMinus = "-";

  let [count, setCount] = useState(0);

  function handlePlusCount() {
    setCount(prevCount => prevCount + 1);
  }

  function handleMinusCount() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <>
      <main className={`${styles.counter} container`}>
        <h1 className={styles.counter__title}>Counter</h1>
        <div className={styles.counter__main}>
          <Button char={charPlus} countCounter={handlePlusCount} />
          <Counter count={count} />
          <Button char={charMinus} countCounter={handleMinusCount} />
        </div>
      </main>
    </>
  );
}

export default App;
