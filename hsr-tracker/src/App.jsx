import Form from "./components/Form/Form.jsx";
import ErrorWindow from "./components/ErrorWindow/ErrorWindow.jsx";
import AllCharacters from "./components/AllCharacters/AllCharacters.jsx";
import InfoCharacter from "./components/InfoCharacter/InfoCharacter.jsx";
import Loader from "./components/Loader/Loader.jsx";
import styles from "./App.module.scss";
import { useData } from "./useData.js";

function App() {
  const {
    uid,
    setUid,
    playerData,
    charactersData,
    errorMessage,
    setErrorMessage,
    handleSubmit,
    isLoading,
    setIsLoading,
    selectedCharacter,
    setSelectedCharacter,
  } = useData();

  return (
    <div className="container">
      <main className={styles.content}>
        <Form uid={uid} setUid={setUid} handleSubmit={handleSubmit} />
        <ul className={styles.content__list}>
          {isLoading ? (
            <Loader />
          ) : (
            charactersData.map(character => (
              <AllCharacters
                key={character.id}
                character={character}
                onClick={() => setSelectedCharacter(character)}
              />
            ))
          )}
        </ul>
        {selectedCharacter && (
          <InfoCharacter
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
        {errorMessage && (
          <ErrorWindow
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setIsLoading={setIsLoading}
          />
        )}
      </main>
    </div>
  );
}

export default App;
