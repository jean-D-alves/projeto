import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const pageDir = path.join(__dirname, "pages");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(pageDir, "index.html"));
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
