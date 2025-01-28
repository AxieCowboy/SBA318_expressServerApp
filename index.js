import express from "express";
import routes from "./routes/api.js";
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
