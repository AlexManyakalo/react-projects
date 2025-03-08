import Form from "./components/Form/Form.jsx";
import ErrorWindow from "./components/ErrorWindow/ErrorWindow.jsx";
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
  } = useData();

  return (
    <div className="container">
      <Form uid={uid} setUid={setUid} handleSubmit={handleSubmit} />
      {errorMessage && (
        <ErrorWindow
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
    </div>
  );
}

export default App;
