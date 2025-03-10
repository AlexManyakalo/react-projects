import { useState, useEffect } from "react";
import api from "../backend/api";

export function useData() {
  const [uid, setUid] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [charactersData, setCharactersData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const UID_LENGTH = 9;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit() {
    if (!uid || uid.length !== UID_LENGTH || !/^\d+$/.test(uid)) {
      setErrorMessage("Некорректно указан UID");
      return;
    }
    try {
      setIsLoading(true);
      const res = await api.apiClient.post("/player", { uid });
      setPlayerData(res.data.player);
      setCharactersData(res.data.characters);
      // console.debug("Ответ сервера:", res.data);
      // console.debug("Данные игрока:", res.data.player);
      // console.debug("Данные персонажей:", res.data.characters);
    } catch (error) {
      setErrorMessage("Ошибка отправки данных");
    }
  }

  useEffect(() => {
    if (charactersData.length > 0) {
      setIsLoading(false);
    }
  }, [charactersData]);

  return {
    uid,
    setUid,
    playerData,
    setPlayerData,
    charactersData,
    setCharactersData,
    errorMessage,
    setErrorMessage,
    handleSubmit,
    isLoading,
    setIsLoading,
    selectedCharacter,
    setSelectedCharacter,
  };
}
