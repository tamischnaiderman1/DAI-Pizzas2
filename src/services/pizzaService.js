import sql from 'mssql';
import configDB from '../models/db.js';

export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');

    console.log(results)

    return results.recordset;
}


export const getById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('SELECT * FROM Pizzas WHERE @pId = id');

    return results.recordset;
}


export const updateById = async (id, pizza) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", sql.Int, id)
    .input( "pNombre", sql.VarChar, pizza.nombre)
    .input("pLibreGluten", sql.Bit, pizza.libreGluten)
    .input( "pImporte", sql.Float, pizza.importe)
    .input("pDescripcion", sql.VarChar, pizza.descripcion)
    .query('UPDATE Pizzas SET Nombre = @pNombre, Descripcion = @pDescripcion, LibreGluten = @pLibreGluten, Importe = @pImporte  WHERE @pId = id ');

    return results.recordset;
}


export const deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('DELETE FROM Pizzas WHERE @pId = id');

    return results.recordset;
}


export const insert = async (pizza) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request() 
    .input( "pNombre", sql.VarChar, pizza.nombre)
    .input("pLibreGluten", sql.Bit, pizza.libreGluten)
    .input( "pImporte", sql.Float, pizza.importe)
    .input("pDescripcion", sql.VarChar, pizza.descripcion)

    
    .query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');

    return results.recordset;
}