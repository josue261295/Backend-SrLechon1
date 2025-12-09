
import { hashPassword } from '../utils/auth.js';
import  User  from '../models/User.model.js';
import Rol from '../models/Rol.model.js';
import { generateJWT } from '../utils/jwt.js';

export class UserController {
    // Lógica para manejar las solicitudes relacionadas con los usuarios
    // req es el envio que haces, el envio del cliente
    // res es la respuesta del servidor 
static createUser = async  (req, res) => {

    const { email,password,phone } = req.body;
    const phoneExists = await User.findOne ({ where: { phone } });

    const userExists = await User.findOne ({ where: { email } });

    if (userExists) {
        const error = new Error ('El usuario ya esta registrado');
        return res.status(409).json({ error:error.message});
    }

    if (phoneExists) {
        const error = new Error ('El telefono ya esta registrado');
        return res.status(409).json({ error:error.message});
    }



    try {
        const passwordHash = await hashPassword(password);
        const user = await User.create (req.body);
        user.password = passwordHash;
        await user.save();
        //const user = await User.create(req.body);
        res.status(201).json("usuario creado exitosamente");
    } catch (error) {
        console.log(error);
        return
    }

}

static getUserAll = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [

                {

                    model: Rol,
                    as: 'rol',
                    attributes: ['id', 'name', "active"],
                }

                ],
                attributes: { 
                    
                    exclude: ['password'] 

                },  
                      

        });
        console.log(users);
        res.status(200).json(users)
    }   catch (error) {
        console.log(error);

    }   



}


static getUserById = async (req, res) => {
    
    const { id } = req.params;
        const userById = await User.findByPk(id, {
            include: [
                {
                    model: Rol,
                    as: 'rol',
                    attributes: ['id', 'name', "active"]
                }
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"],
            },
        });
 
        if (!userById) {
            res.status(404).json({ error: "Usuario no encontrado" })
            return;
        }
 
       

        res.status(200).json(userById);

}

    




    static updateUser =async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    const userUpdate = await User.findOne({ where: { id } });
    if (!userUpdate) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
    }
    
     req.body.password = await hashPassword(password);

    
    try {
        await userUpdate.update(req.body);
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        console.log(error);
        
    }







}

static deleteUser = async (req, res) =>{
    const { id } = req.params;
    const userDelete = await User.findOne({ where: { id } });


    if (!userDelete) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
    }
    


    try {
        await userDelete.destroy();
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        
    }

}




}
