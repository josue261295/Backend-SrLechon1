

import  User  from '../models/User.model.js';
export class UserController {
    // Lógica para manejar las solicitudes relacionadas con los usuarios
    // req es el envio que haces, el envio del cliente
    // res es la respuesta del servidor 
static createUser = async  (req, res) =>{

    const { password } = req.body;


    try {
        const passwordHash = await hashPassword(password);
        const user = new User(req.body);
        user.password = passwordHash;
        await user.save();
        //const user = await User.create(req.body);
        res.status(201).json("usuario creado exitosamente");
    } catch (error) {
        console.log(error);
        return
    }

}


}