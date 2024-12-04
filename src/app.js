import express from "express";
import indexController from "./controller/indexController.js";
import run from "./database/db.js"

const app = express();
const port = 8080;
app.use(express.json())
indexController(app)
run()

app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}, http://localhost:${port}`);
})

