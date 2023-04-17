const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res ) => {res.send("Back esta funcionando")});

app.listen(port, () => {console.log("Se esta ejecutando en el puerto ${port}")});