import express from "express";
import cadastroController from "./controller/cadastroController.js";
import run from "./database/db.js"

const app = express();
const port = 8080;
app.use(express.json())
cadastroController(app)
run()

app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}, http://localhost:${port}`);
})
