import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "./planets.js";
import { logIn, signUp } from "./users.js";
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.get("/api/plantes", getAll);
app.get("/api/plantes/:id", getOneById);
app.post("/api/planets", create);
app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);
app.put("api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
