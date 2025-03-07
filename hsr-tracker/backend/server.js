import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Сервер запущен: http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/movies/recommend", async (req, res) => {
  const data = await getMovies();
  res.send(data);
});

app.get("/movie/genres", async (req, res) => {
  const data = await getMovieGenres(id);
  res.send(data);
});

// Страница фильма
app.get("/movie/:id", async (req, res) => {
  const id = +req.params.id;
  const movies = await getMovies();

  const movie = movies.find(movie => movie.id === id);

  if (movie) res.send(movie);
  else res.status(404).send({ error: "Фильм не найден" });
});
