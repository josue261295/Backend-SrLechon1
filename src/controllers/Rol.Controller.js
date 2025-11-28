import Rol from "../models/Rol.model.js";
 
export class RolController {
    static createRol = async (req, res) => {
 
        const { name } = req.body;
 
        const rolExists = await Rol.findOne({ where: { name } });
        if (rolExists) {
            res.status(400).json({ error: "El rol ya existe" });
            return;
        }
 
        try {
            const rol = await Rol.create(req.body);
            await rol.save();
            res.status(201).json("Rol creado correctamente");
            return;
        } catch (error) {
            console.log(error)
            return
        }
 
    }
}