import express from "express";

const app = express();
const port = 8080;


app.listen(port, function(){
    console.log(`servidor rodando na porta ${port}, http://localhost:${port}`);
})