const express = require('express');
const Productos = require("./Productos")

const productos = new Productos();
const router = express.Router();

router.get("/products", (_req,res) => {
    res.render('products',{products: productos.getAll()});
})

router.get("/", (_req,res) => {
    res.render('form');
})

router.post("/products", (req,res) => {
    productos.crear(req.body);
    res.render('form');
})

module.exports = router;