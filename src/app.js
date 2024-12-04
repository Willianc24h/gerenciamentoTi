import express from "express";
import indexController from "./controller/indexController.js";

const app = express();
const port = 8080;

indexController(app)

app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}, http://localhost:${port}`);
})

