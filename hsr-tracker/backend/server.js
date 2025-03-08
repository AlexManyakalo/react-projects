import express from "express";
import api from "./api.js";
import cors from "cors";

const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Сервер запущен: http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*================== ROUTES ==================*/

app.post("/player", async (req, res) => {
  const { uid } = req.body;

  if (!uid) return res.status(400).json({ error: "UID не передан" });
  try {
    const response = await api.apiServer.get(`sr_info_parsed/${uid}?language=ru`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении данных" });
  }
});
