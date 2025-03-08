import { useState } from "react";
import api from "../backend/api";

export function useData() {
  const [uid, setUid] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [charactersData, setCharactersData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const UID_LENGTH = 9;

  async function handleSubmit() {
    if (!uid || uid.length !== UID_LENGTH || !/^\d+$/.test(uid)) {
      setErrorMessage("Некорректно указан UID");
      return;
    }
    try {
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
  };
}
