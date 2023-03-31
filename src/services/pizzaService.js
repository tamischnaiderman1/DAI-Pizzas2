import sql from 'mssql';
import configDB from '../models/db.js';

export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');

    console.log(results);
}


export const getById = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas WHERE ');

    console.log(results);
}


export const updateById = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('UPDATE * FROM Pizzas WHERE ');

    console.log(results);
}


export const deleteById = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('DELETE * FROM Pizzas WHERE ');

    console.log(results);
}


export const insertById = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('INSERT * FROM Pizzas WHERE ');

    console.log(results);
}