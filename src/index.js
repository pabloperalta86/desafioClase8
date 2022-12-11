const { urlencoded } = require('express');
const express = require('express');
const router = require('./router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api/productos", router);

const server = app.listen(8080, ()=> console.log('Servidor corriendo en el puerto 8080'));

server.on("error",(error) => console.log("Error:" + error));
