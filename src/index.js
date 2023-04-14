import { getAll, getById, insert, deleteById, updateById } from './services/pizzaService.js';
import express from "express"


const app = express()
const port = 3000

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
    const PizzasPop = deleteById(id)
    res.send(PizzasPop)
})


app.post('/', async(req, res) => {
    const PizzasDisco = insert("tami", "sin tacc", true, 25)
    res.send(PizzasDisco)
})

app.put('/:id', async(req, res) => {
    const id = req.params.id
    const PizzasReggaeton = updateById( "tami", "sin tacc", true, 25)
    res.send(PizzasReggaeton)
})


app.listen(port, async( ) => {
    console.log(`Example app listening on port ${port}`)
})



//await getAll();
//await getById(4);
//await insert("tami", ""sin tacc", true, 25);
//await deleteById(11);
//await updateById(10, "tami", "sin tacc", true, 25);
