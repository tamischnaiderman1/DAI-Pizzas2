import { getAll, getById, insert, deleteById, updateById } from './services/pizzaService.js';
import express from "express"
import Pizza from './models/pizza.js';


const app = express()
const port = 3000

app.use(express.json())

app.get('/', async(req, res) => {
    const PizzasRock = await getAll()
    res.send(PizzasRock)
})


app.get('/:id', async(req, res) => {
    const id = req.params.id
    const PizzasRock = await getById(id)
    res.send(PizzasRock)
})


app.delete('/:id', async(req, res) => {
    const id = req.params.id
    const PizzasPop = await deleteById(id)
    res.send(PizzasPop)
})


app.post('/', async(req, res) => {

    const pizza = new Pizza();

    pizza.nombre = req.body.Nombre
    pizza.libreGluten = req.body.LibreGluten
    pizza.importe = req.body.Importe
    pizza.descripcion = req.body.Descripcion


    const PizzasDisco = await insert(pizza)
    res.send(PizzasDisco)
})

app.put('/:id', async(req, res) => {
    const id = req.params.id

    const pizza = new Pizza();

    pizza.nombre = req.body.Nombre
    pizza.libreGluten = req.body.LibreGluten
    pizza.importe = req.body.Importe
    pizza.descripcion = req.body.Descripcion

    const PizzasReggaeton = await updateById(id, pizza)
    res.send(PizzasReggaeton)
})


app.listen(port, async( ) => {
    console.log(`Example app listening on port ${port}`)
})

