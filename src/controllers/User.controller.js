

import  User  from '../models/User.model.js';
export class UserController {
    // Lógica para manejar las solicitudes relacionadas con los usuarios
    // req es el envio que haces, el envio del cliente
    // res es la respuesta del servidor 
static createUser = async  (req, res) =>{
    const user = await User.create(req.body);
    res.status(201).json("Usuario creado exitosamente");
}


}