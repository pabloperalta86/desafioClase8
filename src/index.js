const { urlencoded } = require('express');
const express = require('express');
const router = require('./router2');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/", router);

const server = app.listen(8080, ()=> console.log('Servidor corriendo en el puerto 8080'));

server.on("error",(error) => console.log("Error:" + error));
