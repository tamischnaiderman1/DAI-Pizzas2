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


export const updateById = async (id, nombre, descripcion, libreGluten, importe) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id)
    .input("pNombre", nombre)
    .input("pDescripcion", descripcion)
    .input("pLibreGluten", libreGluten)
    .input("pImporte", importe)
    .query('UPDATE Pizzas SET Nombre = @pNombre, Descripcion = @pDescripcion, LibreGluten = @pLibreGluten, Importe = @pImporte  WHERE @pId = id ');

    return results.recordset;
}


export const deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('DELETE FROM Pizzas WHERE @pId = id');

    return results.recordset;
}


export const insert = async (nombre, descripcion, libreGluten, importe) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request() 
    .input("pNombre", nombre)
    .input("pDescripcion", descripcion)
    .input("pLibreGluten", libreGluten)
    .input("pImporte", importe)
    .query('INSERT INTO Pizzas (Nombre, Descripcion, LibreGluten, Importe) VALUES (@pNombre, @pDescripcion, @pLibreGluten, @pImporte)');

    return results.recordset;
}