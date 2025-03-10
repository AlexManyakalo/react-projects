import api from "../../../backend/api.js";
import styles from "./AllCharacters.module.scss";

function AllCharacters(props) {
  const { character, onClick } = props;

  return (
    <>
      <li className={styles.content__item} onClick={onClick}>
        <div className={styles["content__block-image"]}>
          <img
            className={styles["content__item-image"]}
            src={`${api.apiImages.defaults.baseURL}${character.icon}`}
            alt={`Персонаж ${character.name}`}
          />
        </div>
        <div className={styles["content__item-bottom"]}>
          <h3 className={styles["content__item-title"]}>{character.name}</h3>
          <p className={styles["content__item-paragraph"]}>
            Уровень {character.level}
          </p>
        </div>
      </li>
    </>
  );
}

export default AllCharacters;
