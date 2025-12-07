
import express from "express"; 
import userRoutes from './routes/user.routes.js';
import userRolRoutes from "./routes/rol.routes.js";
import {db} from './database/db.js';
import e from "express";
import morgan from "morgan";

async function conectDB(){
    try{
        await db.authenticate();
        db.sync();
        console.log('conexion a la base de datos exitosa');
    } catch (error){
        console.log('error de conexion a la base de datos:', error.message);
    }
    
}

conectDB();

 
//creamos la aplicacion en express con dode
const app = express();

//manejar archivos json API REST
app.use(express.json());
app.use(morgan('dev'));
//Ruta de usuario
app.use('/api', userRoutes);
app.use('/api', userRolRoutes);

export default app;
