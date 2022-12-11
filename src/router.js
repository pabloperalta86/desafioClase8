const express = require('express');
const Productos = require("./Productos")

const productos = new Productos();
const router = express.Router();

router.get("/", (req,res) => {
    res.send(productos.getAll());
})

router.get("/:id", (req,res) =>{
    res.send(productos.getById(parseInt(req.params.id)));
})

router.post("/", (req,res) => {
    res.send(productos.crear(req.body));
})

router.put("/:id", (req,res) => {
    res.send(productos.updateById(parseInt(req.params.id),req.body));
})

router.delete("/:id", (req,res) => {
    res.send(productos.deleteById(parseInt(req.params.id)));
})


module.exports = router;