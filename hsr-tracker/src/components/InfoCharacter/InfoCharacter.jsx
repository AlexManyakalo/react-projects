import api from "../../../backend/api.js";
import styles from "./InfoCharacter.module.scss";

function InfoCharacter(props) {
  const { character, onClose } = props;

  return (
    <>
      <div className={styles.popup} onClick={onClose}></div>
      <section className={styles.info}>
        <div className="info__top">
          <div className="info__top-left">
            <img
              className="info__top-image"
              src={`${api.apiImages.defaults.baseURL}${character.portrait}`}
              alt={`Персонаж ${character.name}`}
            />
          </div>
          <div className="info__top-right"></div>
        </div>
        <div className="info__bottom"></div>
      </section>
    </>
  );
}

export default InfoCharacter;
