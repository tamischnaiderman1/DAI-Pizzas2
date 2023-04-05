import { getAll, getById, insert, deleteById, updateById } from './services/pizzaService.js';

//await getAll();
//await getById(4);
//await insert("tami", ""sin tacc", true, 25);
//await deleteById(11);
await updateById(10, "tami", "sin tacc", true, 25);
